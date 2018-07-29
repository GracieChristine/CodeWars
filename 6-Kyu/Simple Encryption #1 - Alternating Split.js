// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!
//
// Examples:
//
// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:
//
// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

function encrypt(text, n) {
  if (text === null || n === null || n <= 0) {
    return text;
  }
  let input = text;
  let output = '';

  for (let x = 0; x < n; x++) {
    output = '';
    let odd_chars = '';
    let even_chars = '';

    array_of_text = input.split('');
    array_of_text.map(function(value, index) {
      if (index % 2 != 0) {
        odd_chars += value;
      } else {
        even_chars += value;
      }
    });
    output = odd_chars + even_chars
    input = output;
  }
  return output;
}

function decrypt(encryptedText, n) {
  if (encryptedText === null || n <= 0) {
    return encryptedText;
  }
  let input = encryptedText;
  let output = '';

  for (let x = 0; x < n; x++) {
    output = '';
    let odd_chars = '';
    let even_chars = '';
    array_of_text = input.split('');
    length = array_of_text.length;
    half_length = Math.floor(length / 2)
    even_chars_array = array_of_text.slice(half_length, length);
    odd_chars_array = array_of_text.slice(0, half_length);
    for (let i = 0, len = half_length; i < len; i++) {
      output += even_chars_array[i] + odd_chars_array[i];
    }
    if (length % 2 != 0) {
      output += even_chars_array[half_length];
    }
    input = output;
  }
  return output;
}
