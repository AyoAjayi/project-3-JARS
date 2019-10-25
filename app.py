import os, flask

app = flask.Flask(__name__)
@app.route('/')
def hello():
    return flask.render_template('index.html')
    # return flask.render_template('marketplace.html')  #For testing purpose- to make sure marketplace.html looks okay
    
app.run(
    host=os.getenv('IP', '0.0.0.0'),
    port=int(os.getenv('PORT', 8080)),
    debug=True
    )