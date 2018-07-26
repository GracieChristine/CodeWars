// Write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
// You will be given three parameters :
//
// first the first term in the sequence
// c the constant that you are going to ADD ( since it is an arithmetic sequence...)
// l the number of terms that should be returned

let seqlist = (first, c, l) => {
  let array = [first]
  for (let i = 0; i < l - 1; i++) {
    array.push(array[i] + c)
  }
  return array
}
