import express from "express";
import cors from "cors";
import "./db/server.js";
import notesRouter from "./routes/notesRouter.js";

const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());

app.use("/notes", notesRouter);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
