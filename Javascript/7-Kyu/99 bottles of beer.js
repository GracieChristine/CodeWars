// Write a function sing that returns the lyrics for the song 99 Bottles of Beer as a an array.

const sing = function () {
  const song = [],
      bottlesOfBeer = 99;
  while (bottlesOfBeer > 0) {
    song.push(bottlesOfBeer + " bottle" + (bottlesOfBeer > 1 ? "s" : "") + " of beer on the wall, " + bottlesOfBeer + " bottle" + (bottlesOfBeer > 1 ? "s" : "") + " of beer.");
    song.push("Take one down and pass it around, " + (--bottlesOfBeer > 0 ? bottlesOfBeer : "no more") + " bottle" + (bottlesOfBeer !== 1 ? "s" : "") + " of beer on the wall.");
  }
  song.push("No more bottles of beer on the wall, no more bottles of beer.");
  song.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
  return song;
};
