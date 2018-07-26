// You are given an initial 2-value array (x). You will use this to calculate a score.
//
// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.
//
// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.
//
// For example:
//
// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

let explode = (x) => {
  let arr = [], count = 0;

  console.log('X...', x, '...', typeof x[0], ' & ', typeof x[1]);

  if (typeof x[0] == 'number' && typeof x[1] == 'number') {
    count = x[0] + x[1];
    for (let i = 0; i < count; i++) {
      arr.push(x);
    }
    console.log('Arr..1..', arr);
    return arr;
  }

  if (typeof x[0] == 'number' && typeof x[1] == 'string') {
    count = x[0];
    for (let i = 0; i < count; i++) {
      arr.push(x);
    }
    console.log('Arr..2..', arr);
    return arr;
  }
  if (typeof x[0] == 'string' && typeof x[1] == 'number') {
    count = x[1];
    for (let i = 0; i < count; i++) {
      arr.push(x);
    }
    console.log('Arr..3..', arr);
    return arr;
  }

  if (typeof x[0] == 'string' && typeof x[1] == 'string') {
    return 'Void!';
  }
}
