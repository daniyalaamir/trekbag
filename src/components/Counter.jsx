export default function Counter({ numberOfItemsPacked, totalItems }) {
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalItems} items packed
    </p>
  )
}
