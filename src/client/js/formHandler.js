async function handleSubmit(event) {
  event.preventDefault()
  console.log(document.body)
  const errorFlag = document.getElementById('error')
  errorFlag.style.color = "black"
  errorFlag.innerHTML = "loading..."

  let formText = document.getElementById('name').value
  if(formText === "") {
    errorFlag.style.color = "#FF2929"
    errorFlag.innerHTML = "You must enter any text first"
    Lib.updateView({})
    return null
  }
  Lib.checkForName(formText)
  console.log("::: Form Submitted :::")

  const nlpResult = await fetch('https://frosty-lewin-77eb46.netlify.app/.netlify/functions/nlp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        article: formText
      })
    })
    .then(res => res.json())
    .then(res => {
      return res
    })
    .catch(err => {
      errorFlag.style.color = "#FF2929"
      errorFlag.innerHTML = "server error: Check Your connection to the server"
      console.log(err)
    })

  if(nlpResult.status.msg === "ERR") {
    errorFlag.style.color = "#FF2929"
    errorFlag.innerHTML = "Can't get response from meaningcloud API"
  } else if(nlpResult.status.msg === "OK") {
    errorFlag.innerHTML = ""
    Lib.updateView(nlpResult)
  } else {
    errorFlag.style.color = "#FF2929"
    errorFlag.innerHTML = "Error from meaningcloud API, Check your console for more details"
    console.log(nlpResult.status.msg)
  }
}

export {
  handleSubmit
}
