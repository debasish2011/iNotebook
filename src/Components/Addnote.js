import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
const Addnote = () => {
  const { addNote } = useContext(NoteContext);
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
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
              minLength={5}
              required={true}
              value={note.title}
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
              minLength={5}
              required={true}
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              onChange={handleOnChanege}
              minLength={5}
              required={true}
              value={note.tag}
            />
          </div>
          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            className="btn btn-primary"
            onClick={handleAddNote}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default Addnote;
