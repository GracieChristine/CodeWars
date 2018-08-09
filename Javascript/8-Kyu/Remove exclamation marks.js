// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

function removeExclamationMarks(s) {
  var arr = s.split("");
  arr = arr.filter(function(e) {
    return e !== "!";
  })
  return arr.join("");
}
