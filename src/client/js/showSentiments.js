function updateView(results) {
  // Positivity
  const pos = document.getElementById('pos')
  switch (results.score_tag) {
    case "P":
      pos.innerHTML = "🙂"
      break;
    case "P+":
      pos.innerHTML = "😃"
      break;
    case "N":
      pos.innerHTML = "🙁"
      break;
    case "N+":
      pos.innerHTML = "😔"
      break;
    case "NEU":
      pos.innerHTML = "😐"
      break;
    case "NONE":
      pos.innerHTML = "&#128566"
      break;
    default:
      pos.innerHTML = "❓"
  }

  // Agreement
  const agr = document.getElementById('agr')
  switch (results.agreement) {
    case "AGREEMENT":
      agr.innerHTML = "🤝"
      break;
    case "DISAGREEMENT":
      agr.innerHTML = "🖕"
      break;
    default:
    agr.innerHTML = "❓"
  }

  // Irony
  const irn = document.getElementById('irn')
  switch (results.irony) {
    case "IRONIC":
      irn.innerHTML = "✅"
      break;
    case "NONIRONIC":
      irn.innerHTML = "❎"
      break;
    default:
      irn.innerHTML = "❓"
  }

  // Subjectivity
  const sbj = document.getElementById('sbj')
  switch (results.subjectivity) {
    case "OBJECTIVE":
      sbj.innerHTML = "❎"
      break;
    case "SUBJECTIVE":
      sbj.innerHTML = "✅"
      break;
    default:
      sbj.innerHTML = "❓"
  }

  // Confidence
  const cnf = document.getElementById('cnf')
  if(!results.confidence && results.confidence !== 0) {
    cnf.value = 0
  } else {
    cnf.value = results.confidence
  }

  // return for testing
  return [
    pos.innerHTML,
    agr.innerHTML,
    irn.innerHTML,
    sbj.innerHTML,
    cnf.value
  ]
}

export {
  updateView
}
