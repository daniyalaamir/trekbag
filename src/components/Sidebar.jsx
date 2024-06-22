import { useContext } from "react";
import { ItemsConext } from './../contexts/ItemsContextProvider';
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  const { handleAddItem } = useContext(ItemsConext)
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  )
}
