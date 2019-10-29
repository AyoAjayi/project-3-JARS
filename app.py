import os, flask

app = flask.Flask(__name__)
@app.route('/')
def hello():
    return flask.render_template('index.html')
    # return flask.render_template('marketplace.html')
    # return flask.render_template('submit.html')
    

@app.route('/marketplace')
def market_place():
    return flask.render_template('marketplace.html')
    
@app.route('/submit')
def submit():
    return flask.render_template('submit.html')
    
app.run(
    host=os.getenv('IP', '0.0.0.0'),
    port=int(os.getenv('PORT', 8080)),
    debug=True
    )