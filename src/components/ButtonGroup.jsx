import { useContext } from "react";
import Button from "./Button";
import { ItemsConext } from "../contexts/ItemsContextProvider";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItems
  } = useContext(ItemsConext)
  return (
    <section className="button-group">
      <Button 
        btnType="secondary"
        onClick={handleMarkAllAsComplete}
      >
        Mark all as complete
      </Button>
      <Button 
        btnType="secondary"
        onClick={handleMarkAllAsIncomplete}
      >
        Mark all as incomplete
      </Button>
      <Button 
        btnType="secondary"
        onClick={handleResetToInitial}
      >
        Reset to initial
      </Button>
      <Button 
        btnType="secondary"
        onClick={handleRemoveAllItems}
      >
        Remove all items
      </Button>
    </section>
  )
}
