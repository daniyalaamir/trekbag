import { useState, useRef } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("")
  const inputRef = useRef()

  const onInputChange = (e) => {
    setItemText(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    if(!itemText) {
      alert("Item can't be empty")
      inputRef.current.focus()
      return
    }

    onAddItem(itemText)
    setItemText("")
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h2>Add an item</h2>
      <input 
        ref={inputRef}
        autoFocus={true} 
        value={itemText} 
        onChange={onInputChange} 
      />
      <Button>Add to list</Button>
    </form>
  )
}
