// Write a program to determine if a string contains all unique characters. Return true if it does and false otherwise.
//
// The string may contain any of the 128 ASCII characters.

const hasUniqueChars = (str) => {
  let depot = {}, dup = false;
  let split = str.split('');

  for (let i = 0; i < str.length; i++) {
    if (depot[str[i]]) {
      dup = true;
    }
    depot[str[i]] = true;
  }
  return !dup;
}
