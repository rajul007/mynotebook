import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
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
        "_id": "63289d58376592d4e597d2ea",
        "user": "6326a09894ab8238bc30dff1",
        "title": "Kimetsu no Yaiba",
        "description": "Sun Breathing",
        "tag": "Anime",
        "date": "2022-09-19T16:48:24.301Z",
        "__v": 0
      },
      {
        "_id": "63289d58376592d4e597d2ea",
        "user": "6326a09894ab8238bc30dff1",
        "title": "Kimetsu no Yaiba",
        "description": "Sun Breathing",
        "tag": "Anime",
        "date": "2022-09-19T16:48:24.301Z",
        "__v": 0
      },
      {
        "_id": "63289d58376592d4e597d2ea",
        "user": "6326a09894ab8238bc30dff1",
        "title": "Kimetsu no Yaiba",
        "description": "Sun Breathing",
        "tag": "Anime",
        "date": "2022-09-19T16:48:24.301Z",
        "__v": 0
      },
      {
        "_id": "63289d58376592d4e597d2ea",
        "user": "6326a09894ab8238bc30dff1",
        "title": "Kimetsu no Yaiba",
        "description": "Sun Breathing",
        "tag": "Anime",
        "date": "2022-09-19T16:48:24.301Z",
        "__v": 0
      }
    ]

      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;