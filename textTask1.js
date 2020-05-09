function btnFun() {
  var a='', b='';
  var text = document.querySelector("#inputText").value
  document.querySelector("#para1").innerHTML = text
  var toUpper = text.toUpperCase()
  document.querySelector("#para2").innerHTML = toUpper
  var toLower = text.toLowerCase()
  document.querySelector("#para3").innerHTML = toLower
  for(i=0; i<text.length; i=i+1) {
    if(i%2 == 0)
        a = a.concat(text[i].toLowerCase())
    else
        a = a.concat(text[i].toUpperCase())
    document.querySelector("#para4").innerHTML = a
}

  console.log("Testing")
}
