import Logo from "./Logo";
import Counter from "./Counter";

export default function Header({ numberOfItemsPacked, totalItems }) {
  return (
    <header>
      <Logo />
      <Counter 
        numberOfItemsPacked={numberOfItemsPacked} 
        totalItems={totalItems} 
      />
    </header>
  )
}
