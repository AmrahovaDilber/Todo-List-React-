import React from "react";
import { useState } from "react";
import "../Form/Form.css"
function Form({ handleAddItem }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleAddItem(input); 
    setInput(""); 
  }

  function handleInputValue(e) {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Add your task"
        onChange={handleInputValue}
        value={input}
      />
      <button className="add" type="submit">Add</button>
    </form>
  );
}
export default Form;
