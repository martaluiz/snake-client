const {connect} = require("./client");
const {setupInput} = require("./input");

console.log('Connecting ...');
setupInput(connect());

// const stdin = process.stdin;


// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
//   stdin.on('data' , handleUserInput);
//   return stdin;
// }

// const handleUserInput = function(data) {
//   if (data === "\u0003") { //ctrl + c	  if (key === "\u0003") { //ctrl + c
//     process.exit()
// }
// };





