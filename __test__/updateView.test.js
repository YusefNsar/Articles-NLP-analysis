import { updateView } from '../src/client/js/showSentiments'

// emulate the web page fot the test
document.body.innerHTML = '<body><header><div class="title">Articles NLP</div><img class="logo" src="npl.png" alt="logo"></header><main><section id="form-container"><form onsubmit="return Lib.handleSubmit(event)"><h1 id="form-header">Analyze your article</h1><textarea id="name" type="text" name="input" value="" placeholder="Copy it here"></textarea><input type="submit" value="start analysis" onclick="return Lib.handleSubmit(event)" onsubmit="return Lib.handleSubmit(event)"><span id="error" style="color: rgb(255, 41, 41);">server error: Check Your connection to the server</span></form></section><section id="results-container"><div class="result"><span class="property">Positivness</span><span class="emoji" id="pos">❓</span></div><div class="result"><span class="property">Agreement</span><span class="emoji" id="agr">❓</span></div><div class="result"><span class="property">Irony</span><span class="emoji" id="irn">❓</span></div><div class="result"><span class="property">Subjectivity</span><span class="emoji" id="sbj">❓</span></div><div class="result"><span class="property">Confidence</span><progress class="emoji" id="cnf" value="0" max="100"></progress></div></section></main><footer><p>NLP Project 1 @Udacity-YusefAhmed</p></footer><script type="text/javascript" src="main.js"></script></body>'

const resultExample = {
  "status": {
    "code": "0",
    "msg": "OK",
    "credits": "1",
    "remaining_credits": "19944"
  },
  "model": "general_en",
  "score_tag": "P+",
  "agreement": "AGREEMENT",
  "subjectivity": "SUBJECTIVE",
  "confidence": "98",
  "irony": "NONIRONIC",
  "sentence_list": [{
    "text": "i'm very happy",
    "inip": "0",
    "endp": "13",
    "bop": "y",
    "confidence": "98",
    "score_tag": "P+",
    "agreement": "AGREEMENT",
    "segment_list": [{
      "text": "i'm very happy",
      "segment_type": "main",
      "inip": "0",
      "endp": "13",
      "confidence": "98",
      "score_tag": "P+",
      "agreement": "AGREEMENT",
      "polarity_term_list": [{
        "text": "(very) happy",
        "inip": "9",
        "endp": "13",
        "confidence": "98",
        "score_tag": "P+"
      }]
    }],
    "sentimented_entity_list": [],
    "sentimented_concept_list": []
  }],
  "sentimented_entity_list": [],
  "sentimented_concept_list": []
}

const expectedReturn = [ "😃", "🤝", "❎", "✅", 98 ]


describe("Testing showing sentiment functionality", () => {
  test("Testing if updateView function exist", () => {
    expect(updateView).toBeDefined();
  })

  test("Testing if updateView function works properly", () => {
    expect(updateView(resultExample)).toStrictEqual(expectedReturn);
  })
})
