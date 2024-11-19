// HTTP framework for handling requests
const express = require('express');
//Instance of express framework
const app = express(); 
// DBMS Mysql 
const mysql = require('mysql2');
// Cross Origin Resourse Sharing 
const cors = require('cors');
// Environment variable doc 
const dotenv = require('dotenv'); 

// 
app.use(express.json());
app.use(cors());
dotenv.config(); 

// connection to the database 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME 
});

// Check if there is a connection 
db.connect((err) => {
    // If no connection 
    if(err) return console.log("Error connecting to MYSQL");

    //If connect works successfully
    console.log("Connected to MYSQL as id: ", db.threadId); 
}) 

///new code is added below
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Data is a file found in the Views folder 

app.get('/data', (req,res) => {

    // Retrieve data from database 
    db.query('SELECT * FROM beneficiaries', (err, results) =>{
        if (err){
            console.error(err);
            res.status(500).send('Error Retrieving data')
        }else {
            //Display the records to the browser 
            res.render('data', {results: results});
        }
    });
});
//new code is added above

//part 2 new code goes below(post)
app.get('/insert',(req,res) => {
    res.render("insert");
});

app.post('/insert', (req,res) => {
    const {name,email_address,location} = req.body;
    const sql ='INSERT INTO beneficiaries(name,email_address,location)VALUES (?,?,?)';
    db.query(sql,[name,email_address,location],(err,result)=>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        res.status(201).json({id:result.insertId,name,email_address,location});
    });
});

//part 2 new code goes above



// Start the server 
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);

    // Sending a message to the browser 
    console.log('Sending message to browser...');
    app.get('/', (req,res) => {
        res.send('Server Started Successfully!');
    });

});
