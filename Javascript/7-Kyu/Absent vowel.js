// Your job is to figure out the index of which vowel is missing from a given string.
//
// A has an index of 0,
//
// E has an index of 1,
//
// I has an index of 2,
//
// O has an index of 3,
//
// U has an index of 4.
//
// Example: "John Doe hs 7 red pples under his bsket" => "0";
//
// Example: "Bb Smith sent us six neatly arranged range bicycles" => "3";
//
// There is no need for string validation and every sentence given will contain all vowles but one. (Also, you won't need to worry about capitals)

const absentVowel = s => {
  let i = 0;
  while (i <= 4 && (p = s.split('aeiou'[i++])).length !== 1) ;
  return i - 1;
};
