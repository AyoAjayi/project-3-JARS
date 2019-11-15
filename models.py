import flask_sqlalchemy,app
import flask
import flask_socketio
import os

app.app.config['SQLALCHEMY_DATABASE_URI'] =   os.getenv('DATABASE_URL')


# app.app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://projectjars:ProjectJars2019@localhost/postgres'
db = flask_sqlalchemy.SQLAlchemy(app.app)
# textbook_name, category, author_name, course_name, isbn, price, seller_name, condition, description, seller_contact

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # key
    textbook_name = db.Column(db.String(500))
    category = db.Column(db.String(500))
    author_name  = db.Column(db.String(500))
    course_name  = db.Column(db.String(500))
    isbn  = db.Column(db.String(500))
    price  = db.Column(db.String(500))
    seller_name  = db.Column(db.String(500))
    condition  = db.Column(db.String(500))
    description  = db.Column(db.String(500))
    seller_contact = db.Column(db.String(500))


    def __init__(self, textbook_name, category, author_name, course_name, isbn, price, seller_name, condition, description, seller_contact): 
       self.textbook_name = textbook_name
       self.category = category
       self.author_name = author_name
       self.course_name = course_name
       self.isbn = isbn
       self.price = price
       self.seller_name = seller_name
       self.condition = condition
       self.description = description
       self.seller_contact = seller_contact
        
    def __repr__(self):
        return "< %s self.textbook_name, %s self.category, %s self.author_name, %s self.course_name, %s self.isbn, %s self.price, %s self.seller_name, %s self.condition, %s self.description, %s self.seller_contact>" % (self.textbook_name ,self.category, self.author_name, self.course_name, self.isbn, self.price, self.seller_name, self.condition, self.description, self.seller_contact)

