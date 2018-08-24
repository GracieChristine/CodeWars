// Given a string of words, you need to find the highest scoring word.
//
// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
//
// You need to return the highest scoring word as a string.
//
// If two words score the same, return the word that appears earliest in the original string.
//
// All letters will be lowercase and all inputs will be valid.

function high(x) {
  // Split the words to an array
  let words = x.split(" ");
  let highestScoringWord = "";
  let highestScore = 0;

  // For each word..
  words.map(function(word) {
    // Get the score of each word
    let score = wordScore(word);
    // If the score is beaten by points, copy value of points to score. Use current word as highest scoring word.
    if (score > highestScore) {
      highestScore = score;
      highestScoringWord = word;
    }
  });

  return highestScoringWord;
}

function wordScore(word) {
  const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let score = 0;
  word.split("").map(function(letter) {
    // Get the score of each letter and total them as points
    score += alphabet.indexOf(letter.toUpperCase()) + 1;
  });
  return score;
}

function high(x) {
  //transform the input string into array & define a string of alphabetical latin characters
  let arr = x.split(' ');
  let str = 'abcdefghijklmnopqrstuvwxyz';
  //Iterate through the array with input words to find the one with the greatest sum
  let newArr = arr.map(function(word) {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
  //Return the word with the greatest sum
  return arr[newArr.indexOf(Math.max(...newArr))];
}

const {compose, reduce, split} = require('ramda');

const score = compose(reduce((r, v) => r + v.charCodeAt() - 96, 0), split(''));

const high = compose(reduce(
  (r, v) => score(v) > score(r)
  ? v
  : r,
''), split(' '));
