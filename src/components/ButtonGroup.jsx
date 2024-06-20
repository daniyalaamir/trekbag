import Button from "./Button";

export default function ButtonGroup({ 
  onRemoveAllItems,
  onResetToInitial,
  onMarkAllAsComplete
}) {
  return (
    <section className="button-group">
      <Button 
        btnType="secondary"
        onClick={onMarkAllAsComplete}
      >
        Mark all as complete
      </Button>
      <Button 
        btnType="secondary"
      >
        Mark all as incomplete
      </Button>
      <Button 
        btnType="secondary"
        onClick={onResetToInitial}
      >
        Reset to initial
      </Button>
      <Button 
        btnType="secondary"
        onClick={onRemoveAllItems}
      >
        Remove all items
      </Button>
    </section>
  )
}
