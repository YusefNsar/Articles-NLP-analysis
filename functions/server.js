const serverless = require('serverless-http')
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const runNLP = require('./nlp.js')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

const app = express()

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json())

app.get('/', function (req, res) {

    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send({
        'title': 'test json response',
        'message': 'Message Delivered',
        'time': 'now'
    })
})

app.post('/nlp', (req, res) => {

  const reqBody = {
    key: process.env.API_KEY,
    txt: req.body.article,
    lang: 'en'
  }
  const apiRes = fetch("https://api.meaningcloud.com/sentiment-2.1", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
      redirect: 'follow'
    })
    .then(response => response.json())
    .then(result => {
      res.send(result)
    })
    .catch(error => {
      let errRes = {
        status: {
          msg: "ERR"
        },
        err: {
          error
        }
      }
      res.send(errRes)
    })
})

module.exports.handler = serverless(app);
