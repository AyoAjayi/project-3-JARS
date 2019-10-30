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
- After user being logged in through Google, google login button does not automatically redirect the user to the next page (marketplace page). For deomnstration purpose, we have included a link 'Click here to go to next page...' which will take to marketplace page on click.
- None of the buttons on our app are functional except 'Login with Google' button because everything we have done till this point of time is layout of our app.
- Background image on landing pages does not scale on different screen sizes.

## Resolution to Issues
- We can make our web app to redirect to marketplace page after successful login from user using react router.
- We will make all the button functional for checkpoint2.
- Size of background image is the issue in itself. We can fix that issue by using different image of larger size and of aspect ratio of 3:2(which will compatiable for most of screen sizes).