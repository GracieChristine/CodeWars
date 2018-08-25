// Create a function called shortcut to remove all the lowercase vowels in a given string.
//
// Examples
// shortcut("codewars")  --> cdwrs
// shortcut("goodbye")   --> gdby
// Don't worry about uppercase vowels.

function shortcut(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let solution = "";
  for (let i = 0; i <= string.length; i++) {
    if (vowels.indexOf(string.charAt(i)) === -1) {
      solution = solution + string.charAt(i);
    }
  }
  return solution;
}

function shortcut(string) {
  return string.replace(/[aeiou]/g, '')
}
