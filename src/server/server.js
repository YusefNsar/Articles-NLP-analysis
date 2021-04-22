const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const runNLP = require('./nlp.js')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('dist'))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json())

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/nlp', runNLP)

module.exports.handler = serverless(app);
