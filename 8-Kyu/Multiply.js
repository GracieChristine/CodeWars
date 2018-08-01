// The code does not execute properly. Try to figure out why.

let multiply = (a, b) => a * b;

function multiply(a, b) {
  if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
    return 0;
  }
  return a * b;
}
