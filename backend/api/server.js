import path from "path";
import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

const __dirname = path.resolve();

app.use(cors());
// app.use(express.json()) // comum em requisições post com texto

app.listen(PORT, () => {
  console.log("Servidor escutando na porta: " + PORT);
});

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});