import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const noteInitial = [
    {
      _id: "62dd00872f2d2c53dedd9f48",
      user: "62dd00332f2d2c53dedd9f43",
      title: "Title",
      description: "updated note",
      tag: "test update",
      date: "2022-07-24T08:19:19.079Z",
      __v: 0,
    },
    {
      _id: "62dd00872f2d2c53dedd9f49",
      user: "62dd00332f2d2c53dedd9f43",
      title: "Title",
      description: "updated note",
      tag: "test update",
      date: "2022-07-24T08:19:19.079Z",
      __v: 0,
    },
    {
      _id: "62dd00872f2d2c53dedd9f47",
      user: "62dd00332f2d2c53dedd9f43",
      title: "Title",
      description: "updated note",
      tag: "test update",
      date: "2022-07-24T08:19:19.079Z",
      __v: 0,
    },
    {
      _id: "62dd00872f2d2c53dedd9f46",
      user: "62dd00332f2d2c53dedd9f43",
      title: "Title",
      description: "updated note",
      tag: "test update",
      date: "2022-07-24T08:19:19.079Z",
      __v: 0,
    },
  ];

  const addNote = (title, description, tag)=>{
    
  }
  const updateNote = ()=>{

  }
  const deleteNote = ()=>{

  }

  const [notes, setNotes] = useState(noteInitial);
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
