import mongoose from "mongoose";
async function main() {
  await mongoose.connect("mongodb://localhost:27017/projeto1");
  console.log("Conectado ao banco de dados");
}
main().catch((err) => console.error(err));
export default mongoose;
