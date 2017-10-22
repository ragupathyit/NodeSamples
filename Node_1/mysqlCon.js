// Note: Install Cors using "npm install cors"
var mysql = require('mysql');
var http = require("http");
//var cors = require("cors");
//mysql 

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mca',
  port : 3306
});
connection.connect();
var data={};

connection.query('SELECT * from tbl_employee', function(err, rows, fields) {
  if (!err)
    data = rows;
  else
    console.log(err);
});

//cors - Cross Origin from cloud to our machine
var express = require('express');

var app = express();
app.use(function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//app.options('*', cors()); 
// apply this rule to all requests accessing any URL/URI
//app.all('*', function(req, res, next) {
//    // add details of what is allowed in HTTP request headers to the response headers
//    res.header('Access-Control-Allow-Origin', req.headers.origin);
//    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//    res.header('Access-Control-Allow-Credentials', false);
//    res.header('Access-Control-Max-Age', '86400');
//    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
//    // the next() function continues execution and will move onto the requested URL/URI
//    next();
//});
app.get('/', function (req, res) {
  var data1 = {
    "bestAnimals": [
      "wombat",
      "corgi",
      "puffer fish",
      "owl",
      "crow"
    ]
  };

  res.json(data);
});
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});




// http.createServer(function (request, response) {

//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end(JSON.stringify(data));
// }).listen(8081);

// Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');
connection.end();