var btn = document.querySelector("#clickme");
var txtIn = document.querySelector("#userinput");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function translateURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

btn.addEventListener("click", function btnHandler() {
  var inputTxt=txtIn.value
  fetch(translateURL(inputTxt))
    .then((response) => response.json())
    .then((json) => {
      output.innerText = json.contents.translated;
    })
    .catch(errorHandler);
});

