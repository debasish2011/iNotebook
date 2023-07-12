import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
const Notes = () => {
  const { notes, getNotes, updateNote } = useContext(NoteContext);
  let history = useNavigate();
  const [note, setNote] = useState({
    _id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history("/login");
    }
  });
  const ref = useRef(null);
  const ref2 = useRef(null);
  const updateNoteitem = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClickUpdate = () => {
    updateNote(note.id, note.etitle, note.edescription, note.etag);
    ref2.current.click();
  };
  const handleOnChanege = (e) => {
    setNote({ ...note, [e.target.id]: e.target.value });
  };

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    aria-describedby="emailHelp"
                    value={note.etitle}
                    onChange={handleOnChanege}
                    minLength={5}
                    required={true}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    value={note.edescription}
                    onChange={handleOnChanege}
                    minLength={5}
                    required={true}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    value={note.etag}
                    onChange={handleOnChanege}
                    minLength={5}
                    required={true}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={ref2}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                type="button"
                className="btn btn-primary"
                onClick={handleClickUpdate}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h3>Your Notes</h3>
        <div className="flex">
          <p>{notes.length === 0 && "No Notes to display."}</p>
          {notes.map((notes) => {
            return (
              <Noteitem
                key={notes._id}
                note={notes}
                updateNote={updateNoteitem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
