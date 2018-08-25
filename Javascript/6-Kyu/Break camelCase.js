// Complete the solution so that the function will break up camel casing, using a space between words.
//
// Example
// solution('camelCasing')  => should return 'camel Casing'

function solution(string) {
  return string.split('').map(function(e) {
    return e === e.toUpperCase()
      ? (" " + e)
      : e
  }).join('')
}

function solution(string) {
  return (string.replace(/([A-Z])/g, ' $1'));
}

function solution(string) {
  return string.replace(/[A-Z]/g, function(c) {
    return " " + c;
  });
}
