import React from "react";
export default (props) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      color: "white",
      fontSize: "16px",
    }}
  >
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <button className="deleteBtn" onClick={props.onDelete}>
      x
    </button>
  </div>
);
