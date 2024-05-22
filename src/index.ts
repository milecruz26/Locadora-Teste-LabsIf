import "dotenv/config";
import express from "express";
import rotas from "./rotas/rotas";
const app = express();
app.use(express.json());
app.use(rotas);

app.listen("3000", () => {
  console.log("servidor inicializado na porta 3000");
});
