// Create a class Ghost
//
// Ghost objects are instantiated without any arguments.
//
// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated
//
// ghost = new Ghost();
// ghost.color => "white" or "yellow" or "purple" or "red"

let Ghost = function() {
  let random = Math.ceil(Math.random() * 4);
  switch (random) {
    case 1:
      return this.color = "white";
    case 2:
      return this.color = "yellow";
    case 3:
      return this.color = "purple";
    case 4:
      return this.color = "red";
  }
};

let Ghost = function() {
  this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
};
