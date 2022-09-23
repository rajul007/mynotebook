import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

// Fetch all Notes
const getNotes = async () => {
  // API Call

  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyNmEwOTg5NGFiODIzOGJjMzBkZmYxIn0sImlhdCI6MTY2MzQ4MTUyN30.cpPzRMyLJLaMebWRlnpmiHACYB2Io_YKm-xVUM_vN9c'
    }
  });

  const json = await response.json();
  console.log(json);
  setNotes(json)
}


  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyNmEwOTg5NGFiODIzOGJjMzBkZmYxIn0sImlhdCI6MTY2MzQ4MTUyN30.cpPzRMyLJLaMebWRlnpmiHACYB2Io_YKm-xVUM_vN9c'
      },
      body: JSON.stringify({title, description, tag})
    });

    const json = await response.json();
    console.log(json)

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
  const deleteNote = async (id) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyNmEwOTg5NGFiODIzOGJjMzBkZmYxIn0sImlhdCI6MTY2MzQ4MTUyN30.cpPzRMyLJLaMebWRlnpmiHACYB2Io_YKm-xVUM_vN9c'
      }
    });

    const json = response.json();
    console.log(json);

    console.log("Deleting a note with id " + id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyNmEwOTg5NGFiODIzOGJjMzBkZmYxIn0sImlhdCI6MTY2MzQ4MTUyN30.cpPzRMyLJLaMebWRlnpmiHACYB2Io_YKm-xVUM_vN9c'
      },
      body: JSON.stringify({title, description, tag})
    });

    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;