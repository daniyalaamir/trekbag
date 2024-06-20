import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ 
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        onRemoveAllItems={handleRemoveAllItems}
        onResetToInitial={handleResetToInitial}
      />
    </div>
  )
}
