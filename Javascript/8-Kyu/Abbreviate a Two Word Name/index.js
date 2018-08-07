// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F
//

const abbrevName = (name) => {
  let initial = [];
  let SpellingOut = name.split(' ');

  SpellingOut.map((char, i) => {
    return initial.push(char[0].toUpperCase());
  })
  return initial.join('.');
}

module.exports = abbrevName;
