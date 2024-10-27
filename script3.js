// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

let board = "";

for (let i = 0; i < 64; i++) {
  board +=
    (i % 8 === 0 && i !== 0 ? "\n" : "") +
    ((Math.floor(i / 8) + i) % 2 === 0 ? "#" : " ");
}

console.log(board);
