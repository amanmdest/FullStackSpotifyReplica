import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json()) // comum em requisições post com texto

app.listen(PORT, () => {
  console.log("Servidor escutando na porta: " + PORT);
});

app.get("/", (request, response) => {
  response.send("The woorld-o");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});
