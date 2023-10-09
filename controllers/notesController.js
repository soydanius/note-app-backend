import mongoose from "mongoose";
import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const allNotes = await Note.find();
    if (!allNotes.length) {
      throw new Error("No notes found.");
    }
    res.status(200).json(allNotes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Couldn't get notes." });
  }
};

export const addNewNote = async (req, res) => {
  try {
    const { header, content } = req.body;
    const newNote = await Note.create({ header, content });
    res.status(201).json(newNote);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Couldn't add note." });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { header, content } = req.body;
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Not valid id.");
    }

    const updatedNote = await Note.findOneAndUpdate(
      {
        _id: id,
      },
      {
        header,
        content,
      },
      { new: true }
    );
    if (!updateNote) {
      throw new Error("No note with that id found.");
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedNote = await Note.findOneAndDelete({
      _id: id,
    });

    if (!deletedNote) {
      throw new Error("No note with that id found.");
    }
    res.status(200).json(deletedNote);
  } catch (error) {
    res.send(error.message);
  }
};
