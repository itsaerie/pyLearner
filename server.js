var express = require('express')
var bodyParser = require('body-parser')
var http = require('http').Server(app)
var io = require('socket.io')(http)
var fs = require('fs');

var app = express();
var PORT = 3000;

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://104.211.7.172/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post('/code', async (req, res) => {
  try {
    var code = req.body.code;
    console.log(code)

    fs.writeFile('test.py', code, (err) => {
      if (err) {
         return console.error(err);
      } else {
        console.log("Write Successful")
      }
    });
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
    return console.error(error)
  } finally {
    console.log("Code Submission Attempt")
  }
})

app.listen(PORT, function() {
  console.log('Server PORT:', PORT);
});