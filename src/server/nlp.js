const fetch = require('node-fetch')

const runNLP = (req, res) => {

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
}

module.exports = runNLP
