// Complete the solution so that it reverses all of the words within the string passed in.
//
// Example:
//
// reverseWords("The greatest victory is that which requires no battle")
//  should return "battle no requires which that is victory greatest The"

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

const reverseWords = s => s
  .split ` `
  .reverse()
  .join ` `;

function reverseWords(str) {
  var arr = str.split(" ");
  for (var i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
    arr.splice(i, 1);
  };
  return arr.join(" ");
}
