// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
//
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
//
// If
//
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""
// revrot("563000655734469485", 4) --> "0365065073456944"

function revrot(str, sz) {
  let output = "";
  if (sz === 0) {
    return "";
  }
  for (let i = 0; i < str.length; i += sz) {
    if (str.length - i < sz) {
      break;
    }
    let chunk = createChunk(str.slice(i, i + sz));
    let sumDivisible = chunkCheck(chunk);
    output += sumDivisible
      ? reverseChunk(chunk)
      : rotateChunk(chunk);
  }
  return output;
}

function createChunk(string) {
  let chunk = "";
  for (let i = 0; i < string.length; i++) {
    chunk += string[i];
  }
  return chunk;
}

function chunkCheck(chunk) {
  let sum = 0;
  for (let i = 0; i < chunk.length; i++) {
    sum += Math.pow(parseInt(chunk[i]), 3);
  }
  return sum % 2 === 0
    ? true
    : false;
}

function reverseChunk(chunk) {
  let output = "";
  for (let i = chunk.length - 1; i >= 0; i--) {
    output += chunk[i];
  }
  return output;
}

function rotateChunk(chunk) {
  let output = chunk.split("");
  let rotatedNum = output.shift();
  output.push(rotatedNum);
  return output.join("");
}
