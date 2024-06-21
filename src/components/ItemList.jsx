import { useState, useMemo } from "react"
import EmptyView from "./EmptyView"
import Select from "react-select"

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" }
]

export default function ItemList({ items, handleDeleteItem, handleToggleItem }) {
  const [sortBy, setSortBy] = useState("default")

  const sortedItems = useMemo(() => [...items].sort((a, b) => {
    if(sortBy === "packed") {
      return b.packed - a.packed
    }
    if(sortBy === "unpacked") {
      return a.packed - b.packed
    }
    return
  }), [items, sortBy])

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 ? (
        <section className="sorting">
          <Select 
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={option => setSortBy(option.value)}
          />
        </section>
      ) : null}
      {
        sortedItems.map(item => {
          return (
            <Item 
              key={item.id} 
              item={item} 
              onDeleteItem={handleDeleteItem} 
              onItemToggle={handleToggleItem}
            />
          )
        })
      }
    </ul>
  )
}

function Item({ item, onDeleteItem, onItemToggle }) {
  return (
    <li className="item">
      <label>
        <input 
          type="checkbox" 
          checked={item.packed} 
          onChange={() => onItemToggle(item.id)}
        /> 
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
