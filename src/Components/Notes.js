import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
const Notes = () => {
  const { notes, setNotes } = useContext(NoteContext);
  return (
    <>
      <div className="container my-3">
        <h3>Your Notes</h3>
        <div className="flex">
          {notes.map((notes) => {
            return <Noteitem key={notes._id} note={notes} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
