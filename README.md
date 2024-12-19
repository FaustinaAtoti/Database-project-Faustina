# Database-project-Faustina
Brief introduction; My project is about creating a food distribution management system that handles the zero hunger sdg.
 I installed Visual Studio Code and Node.js for this project.

 Used MySQL as my database system.
 
 In planning my database structure I used draw.io to drawan ERD to visualize my tables and relationships
I then created my database named food_db and created the tables in MySQL. The index.sql file contains queries used at this stage.

The next step was to connect my database to my application.But before that I had to populate my tables with sample data to test my setup and ensure that everything connects properly.

 In connecting our database to our application I did the following:
 
 
1.Run the following command to initalize the backend.

2.npm init -y.

3.Run the following command to install the necessary dependancies.

4.npm install express mysql2 nodemon cors dotenv ejs body-parser


  Note: the body-parser package is middleware to parse incoming request bodies

5.Open .env file and add your workbench password (Save all changes).Also open a server.js file.

$Create a folder named views. This is where you will store all ejs files. The first file in the views folder will be data.ejs

$In your views folder add another file and name it insert.ejs(this is the file you will write your ejs code for forms)

$Create a file and name it index.ejs

$ Create a file and name it donate.ejs



6.Run this command on your terminal: node server.js

7.Search this on your browser http://localhost:3300/data
This will show the data retrieved from the database.


8. To get to your form page search  http://localhost:3300/insert
9. Test your page by filling in the form and checking if the data has been inserted to your database

 
