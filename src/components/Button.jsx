export default function Button( {versionType ,children, onClick} ) {
  return (
    <button
      onClick={onClick} className={`btn ${versionType === 'secondary' ? "btn--secondary" : ""}`}>{children}</button>
  )
}
