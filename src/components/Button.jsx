export default function Button({ btnType, children, onClick }) {
  return (
    <button 
      className={`btn ${btnType === 'secondary' ? 'btn--secondary' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
