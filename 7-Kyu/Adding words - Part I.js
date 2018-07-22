// This is the first part of this kata series. Second part is here and third part is here
//
// Add two English words together!
//
// Implement a class Arith (struct struct Arith{value : &'static str,} in Rust) such that
//
//   javascript
//   var k = new Arith("three");
//   k.add("seven"); this should return "ten"
//   c++
//   Arith* k = new Arith("three");
//   k->add("seven"); this should return string "ten"
//   Rust
//   let c = Arith{value: "three"};
//   c.add("seven")  this should return &str "ten"
// Input - Will be between zero and ten and will always be in lower case
//
// Output - Word representation of the result of the addition. Should be in lower case

let map = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty"
];

class Arith {
  constructor(word) {
    this.val = map.indexOf(word);
  }
  add(word) {
    return map[map.indexOf(word) + this.val]
  }
}
