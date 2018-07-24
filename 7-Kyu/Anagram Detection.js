let isAnagram = function(test, original) {
  // let str1 = test.split('').sort().join('');
  // let str2 = original.split('').sort().join('');
  return test.toLowerCase().split('').sort().join('') != original.toLowerCase().split('').sort().join('') ? false : true;
};
