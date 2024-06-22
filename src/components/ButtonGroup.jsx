import { useItemsContext } from "../lib/hooks";
import Button from "./Button";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItems
  } = useItemsContext()
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
