import React from 'react'
import { useState } from "react";

function Todo() {

  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    const newItem = {
      text,
      id: Date.now(),
    };

    setText("");
    setItems(items.concat(newItem));
  };

  return (
    <div>
      <h1>TODOS</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id} title="hasilTodo">{item.text}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} title="todoSubmit">
        <label htmlFor="new-todo">What needs to be done?</label>
        <br />
        <input type="text" id="new-todo" value={text} onChange={handleChange} title="textTodo"/>
        <button title="buttonTodo">Add #{items.length + 1}</button>
      </form>
    </div>
  );
}

export default Todo;
