# Project-3-JARS

### JARS

This program is a simple public online chat application where multiple people can send and reply to each other's messages (very similar to group chat feature in modern chat applications).



### Built With:
- React- Fronted end
- Python- Serverside
- Flask- Microframework
- PostgreSQL- Database
- WebSocket (Socket.io)- For full duplex communication channel
- Additional libraries- flask_socketio, flask_sqlalchemy, psycopg2, requests, rfc3987, google.oauth2


## A:
-  I did some of the unit tests in order to verify that the chatbot is responding with correct response. For an example when user sends '!! about' it should respond with information about itself.


-  Similarly, I did some of the unit tests in order to verify that the Pokemon API is giving correct response back. For an instance- when a user sends '!! ditto id', chatbot should respond with response received from the api endpoint. (such as: 'Ditto's id is 32.')


-  I also did some of the unit tests in order to verify how it handles when the chatbot receives invalid commands. For an instanc- when user sends '!! Donald Trump', the chatbot should respond with some kind of error message.


-  I did sockio tests in order to verify whether inteded data is being communicated between client and server. In test_server_emits_message() function I tested for many things such as completeness of data, format of data, order of data and socketio event names.


-  In integrated tests, I tested to make sure that our server and server code is doing what it was intended to do



## B:

-  I can add more integration tests in future in order to check the behaviour of server into different checkpoints. Additionally, I can also add more test cases for Pokemon api because we receive very large data as response and it's not possible to cover all the aspects of it.