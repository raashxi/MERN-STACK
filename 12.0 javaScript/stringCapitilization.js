var name = prompt("What's your name?");
var fLetter = name.slice(0,1);
var fLetterCap = fLetter.toUpperCase();
var sPart = name.slice(1, name.length);
var sPartLow = sPart.toLowerCase();
alert("Hi " + fLetterCap + sPartLow + ".");
