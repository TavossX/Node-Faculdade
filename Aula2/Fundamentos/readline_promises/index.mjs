import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
const rl = readline.createInterface({ input, output });
const Linguagem = await rl.question(
  "Qual sua linguagem de progração preferida? "
);
console.log(`Sua linguagem de programação preferida é ${Linguagem}`);
rl.close();
