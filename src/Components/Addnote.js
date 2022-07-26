import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
const Addnote = () => {
  const { addNote } = useContext(NoteContext);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleAddNote = () => {
    addNote(note);
  };
  const handleOnChanege = (e) => {
    setNote({ ...note, [e.target.id]: e.target.value });
  };
  return (
    <>
      <div className="container my-3">
        <h3>Add a Note</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              onChange={handleOnChanege}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              onChange={handleOnChanege}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleAddNote}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Addnote;
