// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
// Examples
// pigIt('Pig latin is cool');  igPay atinlay siay oolcay
// pigIt('Hello world !');      elloHay orldWay !

function pigIt(str) {
  let newArr = [];
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != '?' && arr[i] != '!') {
      let word = arr[i];
      let letter = word.charAt(0);
      let newWord = word.slice(1) + letter + "ay";
      newArr.push(newWord);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.join(" ");
}

function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function(word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}
