// Input:
//
// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
//
// a boolean true if all rotations of strng are included in arr (C returns 1)
// false otherwise (C returns 0)
// #Examples:
//
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
//
// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

function containAllRots (str, arr) {
  const len = str.length
  for (let i of str) {
    str = str[len - 1] + str.substr(0, len - 1)
    if (!~arr.indexOf(str)) return false
  }
  return true
}
