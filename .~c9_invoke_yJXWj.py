import os, flask, flask_socketio, flask_sqlalchemy
import models

app = flask.Flask(__name__)
socketio = flask_socketio.SocketIO(app)

@app.route('/')
def hello():
    return flask.render_template('index.html')


# ***** Body *****
@socketio.on('login')
def on_login(response):
    global seller_name
    global seller_contact
    
    seller_name = str(response['data']['profileObj']['name'])
    seller_contact = str(response['data']['profileObj']['email'])
    image = str(response['data']['profileObj']['imageUrl'])
    # print(image)
    # print(name)
    # socketio.emit('username_received', {'user_name': name})
    # socketio.emit('image_received', {'imageUrl': image})
    # socketio.emit('email_received', {'user_email': email})


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
    if search_data.isnum():
        search_isbn = search_isbn
    elif search_isbn.isstring
    messages = models.Message.query.all()
    all_item = []
    # textbook_name, category, author_name, course_name, isbn, price, seller_name, condition, description, seller_contact
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
    
# *** Server received a new submit event sent by client(Submit.js) ***
@socketio.on('new submit')
def on_new_submit(submit_data):
    print ("Got an event for new submit with data: "+ str(submit_data))
    # textbook_name, category, author_name, course_name, isbn, price, seller_name, condition, description, seller_contact
    textbook_name = submit_data['item_name']
    category = submit_data['category']
    author_name = submit_data['author_name']
    course_name = submit_data['course_name']
    isbn = submit_data['isbn']
    price = submit_data['price']
    condition = submit_data['condition']
    description = submit_data['description']
    data = models.Message(textbook_name, category, author_name, course_name, isbn, price, seller_name, condition, description, seller_contact)
    models.db.session.add(data)
    models.db.session.commit()
    

    

# ***** Footer *****

if __name__ =='__main__':
    socketio.run(
        app,
        host=os.getenv('IP', '0.0.0.0'),
        port=int(os.getenv('PORT', 8080)),
        debug=True
    )