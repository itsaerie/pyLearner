var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var shelljs = require('shelljs')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

var PORT = 10000;

app.use('/', express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post('/code', async (req, res) => {
  try {
    var code = req.body
    var file = `server/submissions/${code.lesson}/${code.problem}.py`
    var output = `import sys
${code.code}

eval(sys.argv[1].strip())

    `
    res.sendStatus(200)
    fs.writeFile(file, output, (err) => { 
      runBash(code, err).then( () => {
        fs.readFile(`server/submissions/${code.lesson}/answers`, "utf8", (error, data) => {
          if (error) {
            return console.error(error)
          } else {
            io.emit("results", data)
          }
        })})
        .catch( (error) => {
          return console.error(error)
        })
    })
  } catch (error) {
    res.sendStatus(500)
    return console.error(error)
  } finally {
    console.log("Code Submission Attempt")
  }
})

const runBash = async (code, err) => {
  if (err) {
    return console.error(err)
  } else {
    console.log("Write Successful")
    var script = `bash compiler.sh ${code.problem} ${code.lesson}`
    shelljs.exec(script)
  }
}

var server = http.listen(PORT, () => {
  console.log('Server PORT:', server.address().port)
})