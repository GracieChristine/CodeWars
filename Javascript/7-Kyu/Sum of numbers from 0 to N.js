// We want to generate a function that computes the series starting from 0 and ending until the given number following the sequence:
//
// 0 1 3 6 10 15 21 28 36 45 55 ....
//
// which is created by
//
// 0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 0+1+2+3+4+5+6+7 etc..
//
// Input:
//
// LastNumber
//
// Output:
//
// series and result
//
// Example:
// Input:
//
// > 6
// Output:
//
// 0+1+2+3+4+5+6 = 21
//
// Input:
//
// > -15
// Output:
//
// -15<0
//
// Input:
//
// > 0
// Output:
//
// 0=0

let SequenceSum = (function() {
  function SequenceSum() {}

class SequenceSum {
  static showSequence(count) {
    if (count === 0)
      return '0=0'
    if (count < 0)
      return `${count}<0`

    const numberRange = Array.from({
      length: count + 1
    }, (_, index) => index)

    const summatoryString = numberRange.join('+')
    const total = numberRange.reduce((total, value) => total + value, 0)

    return `${summatoryString} = ${total}`
  }
}

  return SequenceSum;

})();
