import { useState } from "react"
import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"
import { INITIAL_ITEMS } from "../lib/constants"

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS)

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false
    }
    const newItems = [...items, newItem]
    setItems(newItems)
  }

  const handleRemoveAllItems = () => {
    setItems([])
  }

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar 
          handleAddItem={handleAddItem} 
          handleRemoveAllItems={handleRemoveAllItems} 
        />
      </main>
      <Footer />
    </>
  )
}

export default App
