import { useContext } from "react";
import { ItemsConext } from './../contexts/ItemsContextProvider';

export function useItemsContext() {
  const context = useContext(ItemsConext)
  if(!context) {
    throw new Error("useItemsContext must be used within an ItemsContextProvider")
  }
  return context
}
