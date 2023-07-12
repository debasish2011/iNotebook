import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
const Noteitem = (props) => {
  const { deleteNote } = useContext(NoteContext);
  const { note, updateNote } = props;
  const eraseNote = () => {
    deleteNote(note._id);
  };
  return (
    <>
      <div className="card mx-2 my-2" style={{ width: "15rem" }}>
        <div className="card-body">
          <h5>{note.title}</h5>
          <p>{note.description}</p>
          <i className="fa-solid fa-pen-to-square m-1" onClick={()=>{updateNote(note)}}></i>
          <i className="fa-solid fa-trash-can m-1" onClick={eraseNote}></i>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
