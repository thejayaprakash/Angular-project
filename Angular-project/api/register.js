
var http = require('http');
var mysql = require('mysql');
  // Create a MySQL database connection
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "user"
  });
  
  // Connect to the database
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });
  
  // Use body-parser middleware for parsing POST data

  
  // Define a route for inserting data
  app.post('/insert', (req, res) => {
    console.log('entered inn post methos');
    const { username, email, password,mobileNo } = req.body;
  
    const insertQuery = 'INSERT INTO register (username, email, password,mobileNo) VALUES (?, ?, ?, ?)';
    const values = [username, email, password,mobileNo];
  
    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).send('Error inserting data');
      }
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    });
  });
  
//  exports.insert=function(req,res){
//   console.log(req.body);
//  }
