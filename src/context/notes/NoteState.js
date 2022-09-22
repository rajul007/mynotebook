import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [{
    "_id": "63289d58376592d4e597d2ea",
    "user": "6326a09894ab8238bc30dff1",
    "title": "Kimetsu no Yaiba",
    "description": "Sun Breathing",
    "tag": "Anime",
    "date": "2022-09-19T16:48:24.301Z",
    "__v": 0
  },
  {
    "_id": "63289d58376592d2e597d2ea",
    "user": "6326a09894ab8238bc30dff1",
    "title": "Kimetsu no Yaiba",
    "description": "Sun Breathing",
    "tag": "Anime",
    "date": "2022-09-19T16:48:24.301Z",
    "__v": 0
  },
  {
    "_id": "63289d58376592d4e591d2ea",
    "user": "6326a09894ab8238bc30dff1",
    "title": "Kimetsu no Yaiba",
    "description": "Sun Breathing",
    "tag": "Anime",
    "date": "2022-09-19T16:48:24.301Z",
    "__v": 0
  },
  {
    "_id": "63289d58370592d4e597d2ea",
    "user": "6326a09894ab8238bc30dff1",
    "title": "Kimetsu no Yaiba",
    "description": "Sun Breathing",
    "tag": "Anime",
    "date": "2022-09-19T16:48:24.301Z",
    "__v": 0
  },
  {
    "_id": "63289d50376592d4e597d2ea",
    "user": "6326a09894ab8238bc30dff1",
    "title": "Kimetsu no Yaiba",
    "description": "Sun Breathing",
    "tag": "Anime",
    "date": "2022-09-19T16:48:24.301Z",
    "__v": 0
  }
  ]

  const [notes, setNotes] = useState(notesInitial)

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO: API Call
    console.log("Adding a new Note")
    const note = {
      "_id": "63289d50376592d4e597d0ea",
      "user": "6326a09894ab8238bc30dff1",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-09-19T16:48:24.301Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = (id) => {
    // TODO: API Call
    console.log("Deleting a note with id " + id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = (id, title, description, tag) => {

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;