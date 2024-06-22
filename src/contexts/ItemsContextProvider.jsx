import { useState, useEffect, createContext } from "react"
import { INITIAL_ITEMS } from "../lib/constants"

export const ItemsConext = createContext()

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || INITIAL_ITEMS
  )

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false
    }
    const newItems = [...items, newItem]
    setItems(newItems)
  }

  const handleDeleteItem = id => {
    const newItems = items.filter(item => item.id !== id)
    setItems(newItems)
  }

  const handleToggleItem = id => {
    const newItems = items.map(item => {
      if(item.id === id) {
        return { ...item, packed: !item.packed }
      }
      return item
    })
    setItems(newItems)
  }

  const handleRemoveAllItems = () => {
    setItems([])
  }

  const handleResetToInitial = () => {
    setItems(INITIAL_ITEMS)
  }

  const handleMarkAllAsComplete = () => {
    const newItems = items.map(item => {
      return { ...item, packed: true }
    })
    setItems(newItems)
  }

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map(item => {
      return { ...item, packed: false }
    })
    setItems(newItems)
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  return (
    <ItemsConext.Provider 
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete
      }}
    >
      {children}
    </ItemsConext.Provider>
  )
}
