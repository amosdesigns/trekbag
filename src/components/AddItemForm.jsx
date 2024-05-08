import { useRef, useState } from "react";
import Button from "./Button";
import { useItemsContext } from "../lib/hooks.js";

export default function AddItemForm() {
  const { handleAddItem } = useItemsContext();
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleChange = (event) => {
    event.preventDefault();
    setItemText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText.trim()) {
      alert("Please enter an item");
      inputRef.current.focus();
      return;
    }
    handleAddItem(itemText);
    setItemText("");
  };

  return (
    <form action="Post" onSubmit={(event) => handleSubmit(event)}>
      <h2>add an item</h2>
      <input
        type="text"
        value={itemText}
        onChange={handleChange}
        autoFocus={true}
        ref={inputRef}
      />

      <Button type="submit">add to list</Button>
    </form>
  );
}
