import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual sua linguagem de progração preferida? ", (Linguagem) => {
  console.log(`Sua linguagem de programação preferida é ${Linguagem}`);
  rl.close();
});
