// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

const rows = 4;
let output = "";

for (let i = 1; i <= rows * 2 - 1; i++) {
  const numHashes = i <= rows ? i : rows * 2 - i;
  output += "#".repeat(numHashes) + "\n";
}

console.log(output);
