1-Clone the project from the github repository

2-Open the directory server using-

### `cd server`

Now run the command `npm start` in the terminal. This starts the server at PORT `3001`

3-Now open a new terminal to open the client directory
First run the command `npm install` to install the client dependencies
Then run the command `npm start` this will start the client at `localhost:3000`

4- Now open the browser and type in `localhost:3000` and type in your username and a room id. Example username=abc and room id=12

5-Open another browser window and type in `localhost:3000` and type in a different username but the `same` room id as previous. Example username=cde and room id=12

6- Now when a message is sent from one browser window it will be displayed to other browser window along with time and username. Here our 2 browser windows serve as two different users.

7-Similarly we can open as many different windows signifying different users and as long as users guive the same room id they will be able to chat with each other in real time.
