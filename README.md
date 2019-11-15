# Project-3-JARS

### JARS

## Description

We aim to deliver an app that allows Morgan State students to buy and sell textbooks with ease. This app will allow users to  buy or sell textbooks after being logged in using google. Sellers  will be able to create a profile and post books they have to sell and will be given the means to contact a buyer in order to set up a transaction. Sellers will provide their Morgan email address with the item listing for initial point of contact to make a transaction. Buyers will be able to search for books through our web app.
At this point of time, JARS is under development cycle (implementation phase) therefore it is only the layout of our webapp.

## Getting started
- Install Flask
- Install npm
- Run 'npm run watch' from a terminal
- Run 'python app.py' from another terminal while running 'npm run watch'

### Built With:
- React- Fronted end
- Python- Serverside
- Flask- Microframework
- PostgreSQL- Database
- WebSocket (Socket.io)- For full duplex communication channel
- Additional libraries- flask_socketio, flask_sqlalchemy, psycopg2, requests, google.oauth2


## Known Issues
- After user being logged in through Google, google login button does not automatically redirect the user to the next page (marketplace page). For deomnstration purpose, we have included a login button below the google login button to redirect.
- Our current database is not optimal for differentiating between buyers and sellers and we might run into issues when scaling the database to handle a lot of people. We need a better data model
- The way we are retrieving data from our database is by querying the database at once. This is not optimal.
- We have an upload picture button for the user to upload their textbooks. This button is not currently storing the photos the user uploads.
- Our search field at times, does not let user conduct searches after another.
- The user should be able to switch back and forth between multiple pages

## Resolution to Issues
- We can make our web app to redirect to marketplace page after successful login from user using react router.
- We need to create a better data model that identifies relationships between the different fields in our database.
- We will have to store the uploaded photo so we can render it to the client when a search occurs.
- We would need to look at the client side of our code to see where the issue is stemming from, since we are currently unsure
- We have to use react router to implement this into our web app.
