// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.
//
// example
//
// capMe(['jo', 'nelson', 'jurie'])      returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY'])  returns ['Karly', 'Daniel', 'Kelsey']

const capMe = names => names.map(name => `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`)

function capMe(names) {
  return names.map(function(n) {
    return n.charAt(0).toUpperCase() + n.substring(1).toLowerCase();
  });
}
