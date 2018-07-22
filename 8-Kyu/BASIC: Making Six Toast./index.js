// Making Six Toast:
// STORY:
// You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.
// PROBLEM:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.
// WHAT TO DO:
// Make a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.
// EXAMPLE:
// You must return the number of toast the you need to put in (or to take out). Let's say you put five in:
// JAVASCRIPT:
// // The "5" is how many pieces you put in.
// sixToast(5);
// // It should return 1.
// function sixToast(num) {
// // code
// return 1;
// }
// COFFEESCRIPT:
// # The "5" is how many pieces you put in.
// sixToast(5)
// # It should return 1.
// sixToast=(num) ->
// # code
// return 1
// PYTHON:
// # The "5" is how many pieces you put in: sixToast(5)
// # It should return 1.
// def six_toast(num):
// # code
// return 1
// RUBY:
// # The "5" is how many pieces you put in.
// six_toast(5)
// # It should return 1.
// def six_toast(num)
// # code
// return 1
// end
// C#:
// # TThe "5" is how many pieces you put in.
// Kata.SixToast(5)
// # It should return 1.
// public static int SixToast(int num)
// {
// # code
// return 1;
// }
// This time you put twelve in:
// JAVASCRIPT:
// // The "12" is how many pieces you put in.
// sixToast(12);
// // It should return 6, not -6.
// function sixToast(num) {
// // code
// return 6;
// }
// COFFEESCRIPT:
// # The "12" is how many pieces you put in.
// sixToast(12)
// # It should return 6, not -6.
// sixToast=(num) ->
// # code
// return 6
// PYTHON:
// # The "12" is how many pieces you put in.
// sixToast(12)
// # It should return 6, not -6.
// def six_toast(num):
// # code
// return 6
// RUBY:
// # The "12" is how many pieces you put in.
// six_toast(12)
// # It should return 6, not -6.
// def six_toast(num)
// # code
// return 6
// end
// C#:
// # The "12" is how many pieces you put in.
// Kata.SixToast(12)
// # It should return 6, not -6.
// public static int SixToast(int num)
// {
// # code
// return 6;
// }
// Good luck!

function sixToast(num) {
  return Math.abs(num - 6);
}

module.exports = sixToast;
