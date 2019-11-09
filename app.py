import os, flask, flask_socketio, flask_sqlalchemy

app = flask.Flask(__name__)
socketio = flask_socketio.SocketIO(app)

@app.route('/')
def hello():
    return flask.render_template('index.html')


# ***** Body *****

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
    
    
# *** Server received a new submit event sent by client(Submit.js) ***
@socketio.on('new submit')
def on_new_submit(submit_data):
    print ("Got an event for new submit with data: "+ str(submit_data))


# ***** Footer *****

if __name__ =='__main__':
    socketio.run(
        app,
        host=os.getenv('IP', '0.0.0.0'),
        port=int(os.getenv('PORT', 8080)),
        debug=True
    )