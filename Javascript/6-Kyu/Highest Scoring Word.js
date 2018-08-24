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
