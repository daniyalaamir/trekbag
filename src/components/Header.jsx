import { useItemsContext } from "../lib/hooks";
import Logo from "./Logo";
import Counter from "./Counter";

export default function Header() {
  const { items } = useItemsContext()
  return (
    <header>
      <Logo />
      <Counter 
        numberOfItemsPacked={items.filter(item => item.packed).length} 
        totalItems={items.length} 
      />
    </header>
  )
}
