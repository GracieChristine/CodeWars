// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// doubleChar("String") ==> "SSttrriinngg"
//
// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
//
// doubleChar("1234!_ ") ==> "11223344!!__  "

function doubleChar(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i];
  }
  return newStr;
}

const doubleChar = (str) => str.split("").map(c => c + c).join("");
