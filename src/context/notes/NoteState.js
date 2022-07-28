import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  const host = "http://localhost:5000";

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkZDAwMzMyZjJkMmM1M2RlZGQ5ZjQzIn0sImlhdCI6MTY1ODY1MDcwMH0.G6b0rWRuako6HFvdbH4pvMR2cnSqBk4KkPBsioI96L0",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkZDAwMzMyZjJkMmM1M2RlZGQ5ZjQzIn0sImlhdCI6MTY1ODY1MDcwMH0.G6b0rWRuako6HFvdbH4pvMR2cnSqBk4KkPBsioI96L0",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    let json = await response.json();
    let note = json;
    setNotes(notes.concat(note));
  };

  const updateNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkZDAwMzMyZjJkMmM1M2RlZGQ5ZjQzIn0sImlhdCI6MTY1ODY1MDcwMH0.G6b0rWRuako6HFvdbH4pvMR2cnSqBk4KkPBsioI96L0",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    let json = await response.json();
    console.log(json);
    let newNOTES = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNOTES.length; index++) {
      const element = newNOTES[index];
      if (element._id === id) {
        newNOTES[index].title = title;
        newNOTES[index].description = description;
        newNOTES[index].tag = tag;
        break;
      }
    }
    setNotes(newNOTES);
  };

  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkZDAwMzMyZjJkMmM1M2RlZGQ5ZjQzIn0sImlhdCI6MTY1ODY1MDcwMH0.G6b0rWRuako6HFvdbH4pvMR2cnSqBk4KkPBsioI96L0",
      },
    });
    let json = await response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
