import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  header: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
    trim: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Note", NoteSchema);
