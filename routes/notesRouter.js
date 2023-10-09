import express from "express";
import {
  getAllNotes,
  addNewNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

const notesRouter = express.Router();

notesRouter.route("/").get(getAllNotes).post(addNewNote);

notesRouter.route("/:id").put(updateNote).delete(deleteNote);

export default notesRouter;
