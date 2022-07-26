import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <>
      <div className="card mx-2 my-2" style={{ width: "15rem" }}>
        <div className="card-body">
          <h5>{note.title}</h5>
          <p>{note.description}</p>
          <i className="fa-solid fa-pen-to-square m-1"></i>
          <i className="fa-solid fa-trash-can m-1"></i>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
