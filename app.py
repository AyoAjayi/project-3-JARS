import os, flask, flask_socketio, flask_sqlalchemy

# For authenticating google token on backend
from google.oauth2 import id_token
from google.auth.transport import requests

# Time library
from time import gmtime, strftime

# For gmail smtp library
import smtplib


app = flask.Flask(__name__)
import models  # It needs to be here
socketio = flask_socketio.SocketIO(app)

@app.route('/')
def hello():
    return flask.render_template('index.html')


# ***** Body *****
    
    
# *** Server received the google 'id_token' sent from client (Login.js)
@socketio.on('google token')
def on_google_token_id(token):
    print ("Got an event for GOOGLE TOKEN ID: "+ str(token))
    try:
        # Specify the CLIENT_ID of the app that accesses the backend:
        # To validate an ID token in Python, using the verify_oauth2_token function
        CLIENT_ID = '433826711359-r31ipjdt01vfjhgbdi1go9b1508c7t8g.apps.googleusercontent.com'
        idinfo = id_token.verify_oauth2_token(token['google_user_token'], requests.Request(), CLIENT_ID)
    
        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            raise ValueError('Wrong issuer.')
    
        # ID token is valid. Get the user's Google Account ID from the decoded token.
        userid = idinfo['sub']
        
        # In order to insert on database and send it to client later + making global variable
        global server_received_imageurl
        server_received_imageurl = idinfo['picture']
        
        global server_received_name
        server_received_name = idinfo['name']
        
        global server_received_email
        server_received_email = idinfo['email']
        
        
        print("************")
        print("Name: "+ idinfo['name'])
        print("Imageurl: "+ idinfo['picture'])
        print("Email: "+ idinfo['email'])
        print("************")
    
    except ValueError:
        # Invalid token
        print("Invalid token")


@socketio.on('connect')
def on_connect():
    print('Someone connected!')


@socketio.on('disconnect')
def on_disconnect():
    print('Someone disconnected!')

# *** Server received a new search event sent by client(Nav.js) ***
@socketio.on('new search')
def on_new_search(search_data):
    print ("Got an event for new search with data: "+ str(search_data))
    
    #extracted_search_data is the value of the user's search input
    extracted_search_data = str(search_data["search_input"])
    print("extracted_search_data:", extracted_search_data)
    
    #Queried the database
    messages = models.Message.query.all()
    
    # Created an array to store all the contents of the database
    all_item = []
    
    # Different categories in the database: textbook_name, category, author_name, course_name, isbn, price, seller_name, condition, description, seller_contact
    # Populate all_item array with contents of the database. The all_item array is a 2d array.
    for i in messages:
       textbook_name = i.textbook_name
       category = i.category
       author_name = i.author_name
       course_name = i.course_name
       isbn = i.isbn
       price = i.price
       seller_name = i.seller_name
       condition = i.condition
       description = i.description
       seller_contact = i.seller_contact
       each_item = [textbook_name, category, author_name, course_name, isbn, price, seller_name, condition, description, seller_contact]
       all_item.append(each_item)
    print(all_item)
    
    # List that will carry all items to be rendered for display.
    items_to_render = []
    
    # Will render every item from the database if user inputs nothing and click search
    if (extracted_search_data == ""):
        items_to_render = all_item[:]
        print("After empty string:", items_to_render)
    
    #If user searched for a book using the isbn number, check if the isbn is in the database
    elif extracted_search_data.isdigit():
        search_isbn = extracted_search_data
        for single_item1 in all_item:
            if (single_item1[4] == str(search_isbn)):
                items_to_render.append(single_item1)
        print("Items to be rendered1:",items_to_render)
                    
    #If user searched for a book used the textbook name, check if the textbook name is in the database.               
    else:
        # search_name = extracted_search_data
        # for single_item2 in all_item:
        #     if single_item2[0] == str(search_name):
        #         items_to_render.append(single_item2)
        # print("Items to be rendered2:",items_to_render)
        
        search_name = extracted_search_data.lower()
        search_list = search_name.split(" ")
        print("Search List: ", search_list)
        for single_item2 in all_item:
            lw_item_name = single_item2[0].lower()
            # If we got exact match of textbook name on database
            print("Single item: ", lw_item_name)
            if (search_name == lw_item_name):
                items_to_render.append(single_item2)
                print("Got exact match!")
            # If we don't have any exact match on database
            else:
                lw_name_list = lw_item_name.split(" ")
                for search_letter in search_list:
                    if (single_item2 not in items_to_render):
                        if (search_letter in lw_name_list):
                            items_to_render.append(single_item2)
        
        
        
    # Sending a list('items_to_render') to client for display
    socketio.emit('be rendered', {'render_list': items_to_render})
    print("Render list sent to client.")
    
    # Closing the connection with database in order to avoid 'QueuePool limit' error.
    models.db.session.close()

    
    
# *** Server received a new submit event sent by client(Submit.js) ***
@socketio.on('new submit')
def on_new_submit(submit_data):
    print ("Got an event for new submit with data: "+ str(submit_data))
    # Getting posted time from server
    posted_time = strftime("%a, %d %b %Y %H:%M:%S", gmtime())
    print(posted_time)
    # textbook_name, category, author_name, course_name, isbn, price, seller_name, condition, description, seller_contact
    textbook_name = submit_data['item_name']
    category = submit_data['category']
    author_name = submit_data['author_name']
    course_name = submit_data['course_name']
    isbn = submit_data['isbn']
    price = submit_data['price']
    condition = submit_data['condition']
    # Attaching posted timestamp along with description
    description = str(submit_data['description']) + "   [Posted on: " + str(posted_time) + "]"
    # server_received_name and server_received_email are coming from google google login button on backend
    data = models.Message(textbook_name, category, author_name, course_name, isbn, price, server_received_name, condition, description, server_received_email)
    models.db.session.add(data)
    models.db.session.commit()
    # Closing the connection with database in order to avoid 'QueuePool limit' error.
    models.db.session.close()


# *** Server received a new search event sent by client(Marketplace.js) when contact seller button is clicked ***
@socketio.on('selected item')
def on_new_click(seller_contact):
    print ("Got an event for new selected contact: "+ str(seller_contact))
    
    # Extracted seller contact infor is the value of the user's search input
    abs_seller_email = str(seller_contact["email"])
    abs_seller_name = str(seller_contact["name"])
    abs_item_name = str(seller_contact["item"])
    print("******************")
    print("Seller email: ", abs_seller_email)
    print("Seller name: ", abs_seller_name)
    print("Item name: ", abs_item_name)
    print("******************")
    abs_first_name = (abs_seller_name.split(" "))[0]
    
    # *************
    # For gmail emailing system
    content = "Hello " + abs_first_name + ",\n\n" + server_received_name + " is interested in one of your listing (" + abs_item_name + ") at JARS and would like to know more about it. Please contact him/her at this email: " + server_received_email + "." + "\n\nThanks for using JARS." + "\n\nSincerely,\nJARS Team"
    sender = "projectjars2019@gmail.com"
    recipient = abs_seller_email
    mail = smtplib.SMTP('smtp.gmail.com', 587)
    mail.ehlo() #Identify computer
    mail.starttls() #Transport layer security
    username = os.getenv("GMAIL_USER_NAME")
    password = os.getenv("GMAIL_PASSWORD")
    mail.login(username, password)
    header = "To: " + recipient + "\n" + "From: " + sender + "\n" + "Subject: Someone interested in your listing\n"
    content = header + content
    mail.sendmail(sender, recipient, content)
    mail.close()
    print("***************Email has been sent to the recipient**************")
    # *************


# ***** Footer *****

if __name__ =='__main__':
    socketio.run(
        app,
        host=os.getenv('IP', '0.0.0.0'),
        port=int(os.getenv('PORT', 8080)),
        debug=True
    )