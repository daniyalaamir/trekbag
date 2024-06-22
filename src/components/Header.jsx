import { useContext } from "react";
import { ItemsConext } from './../contexts/ItemsContextProvider';
import Logo from "./Logo";
import Counter from "./Counter";

export default function Header() {
  const { items } = useContext(ItemsConext)
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
