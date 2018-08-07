// Sometimes we need information about the list/arrays we're dealing with. You'll have to write such a function in this kata. Your function must provide the following informations:
//
// Length of the array
// Number of integer items in the array
// Number of float items in the array
// Number of string character items in the array
// Number of whitespace items in the array
// The informations will be supplied in arrays that are items of another array. Like below:
//
// Output array = [[array length],[no of integer items],[no of float items],[no of string chars items],[no of whitespace items]]
//
// Added Difficulty
// If any item count in the array is zero, you'll have to replace it with a None/nil/null value (according to the language). And of course, if the array is empty then return 'Nothing in the array!. For the sake of simplicity, let's just suppose that there are no nested structures.
//
// Output
// If you're head is spinning (just kidding!) then these examples will help you out-
//
//
// array_info([1,2,3.33,4,5.01,'bass','kick',' '])--------->[[8],[3],[2],[2],[1]]
// array_info([0.001,2,' '])------------------------------>[[3],[1],[1],[None],[1]]
// array_info([])----------------------------------------->'Nothing in the array!'
// array_info([' '])-------------------------------------->[[1],[None],[None],[None],[1]]
// Remarks
// The input will always be arrays/lists. So no need to check the inputs.

function arrayInfo(arr) {
  let length = arr.length,
    intC = 0,
    floatC = 0,
    strC = 0,
    wsC = 0,
    stat = [];

  if (length == 0) {
    return 'Nothing in the array!';
  } else {
    arr.map((item) => {
      console.log('Item...', item, ' :: ', typeof item);
      if (typeof item == 'number' && Number.isInteger(item) == true) {
        intC++;
      }
      if (typeof item == 'number' && Number.isInteger(item) == false) {
        floatC++;
      }
      if (typeof item == 'string' && item != ' ') {
        strC++;
      }
      if (item == ' ') {
        wsC++;
      }
    })
  }

  stat.push([length], (
    intC > 0
    ? [intC]
    : [null]), (
    floatC > 0
    ? [floatC]
    : [null]), (
    strC > 0
    ? [strC]
    : [null]), (
    wsC > 0
    ? [wsC]
    : [null]));

  return stat;
}

function arrayInfo(arr) {
  if (!arr.length)
    return 'Nothing in the array!'

  return [
    x => true,
    Number.isInteger,
    x => typeof x == 'number' && !Number.isInteger(x),
    x => typeof x == 'string' && x != ' ',
    x => x == ' '
  ].map(f => [arr.filter(f).length || null])
}

function arrayInfo(arr) {
  if (arr.length === 0)
    return 'Nothing in the array!';
  return [
    [arr.length],
    [arr.filter(x => x === parseInt(x)).length || null],
    [arr.filter(x => typeof x === 'number' && (/\./).test(x)).length || null],
    [arr.filter(x => typeof x === 'string' && x !== ' ').length || null],
    [arr.filter(x => x === ' ').length || null]
  ];
}
