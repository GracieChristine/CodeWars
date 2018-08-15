// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
//
// Add the value "codewars" to the array websites/Websites 1,000 times.
//
// let websites = []

let websites = [];
for (let i = 0; i < 1000; i++) {
  websites.push('codewars');
}

let websites = [];
while (websites.length < 1000) {
  websites.push("codewars")
}

let websites = new Array(1000).fill("codewars");
