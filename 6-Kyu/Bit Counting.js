// Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
//
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

let countBits = (n) => {
  let arr = n.toString(2).split('');
  let newArr = arr.map((value) => {
    return parseInt(value);
  })
  let sum = newArr.reduce((sum, num) => sum + num, 0)
  return sum;
}

let countBits = (n) => n.toString(2).split('0').join('').length;
