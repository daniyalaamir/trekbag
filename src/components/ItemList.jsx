import EmptyView from "./EmptyView"

export default function ItemList({ items, handleDeleteItem, handleToggleItem }) {
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {
        items.map(item => {
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
