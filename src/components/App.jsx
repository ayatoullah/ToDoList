import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Note from "./Note";
import "./SCSS/App.scss";
const App = () => {
  const [isEditing, SetIsEditing] = useState(false);
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const updateNote = (event) => {
    setInputValue(event.target.value);
  };
  const addNote = () => {
    //check if note is empty or not
    if (!inputValue.replace(/\s/, "").length) {
      return;
    }
    console.log("🚀 ~ file: app.jsx ~ line 13 ~ addNote ~ addNote", addNote);
    let currentNotes = [...notes, inputValue];
    setNotes(currentNotes);
    console.log(
      "🚀 ~ file: app.jsx ~ line 15 ~ addNote ~ currentNotes",
      currentNotes
    );
    setInputValue("");
    console.log("🚀 ~ file: app.jsx ~ line 22 ~ App ~ inputValue", inputValue);
  };
  const deleteNote = (index) => {
    console.log("index", index);
    const newNotes = [...notes];
    console.log("notes", notes);
    newNotes.splice(index, 1);
    setNotes(newNotes);
    console.log("🚀 ~ file: app.jsx ~ line 29 ~ deleteNote ~ notes", notes);
  };

  return (
    <div className="container">
      <div className="btn" onClick={addNote}>
        +
      </div>
      <input
        ref={inputRef}
        value={inputValue}
        className="textInput"
        type="text"
        onChange={updateNote}
      />
      {notes.map((item, index) => {
        console.log(item);
        return (
          // @ts-ignore
          <Note
            item={item}
            key={`todo+${index}`}
            onClick={() => deleteNote(index)}
          />
        );
      })}
    </div>
  );
};
export default App;
