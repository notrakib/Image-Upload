function main(textInfo) {
  var text = document.createTextNode(textInfo.text);
  document.getElementById("text").appendChild(text);

  var year = document.createTextNode(`Year: ${textInfo.year}`);
  document.getElementById("year").appendChild(year);

  var number = document.createTextNode(`Number: ${textInfo.number}`);
  document.getElementById("number").appendChild(number);

  var found = document.createTextNode(`Found: ${textInfo.found}`);
  document.getElementById("found").appendChild(found);

  var type = document.createTextNode(`Type: ${textInfo.type}`);
  document.getElementById("type").appendChild(type);
}
