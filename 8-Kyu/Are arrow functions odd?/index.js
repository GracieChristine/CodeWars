// Time to test your basic knowledge in functions! Return the odds from a list:
//
// odds([1,2,3,4,5]) #=> [1,3,5]

function odds(values){
  return values.filter(value => value % 2 != 0 );
}

module.exports = odds;
