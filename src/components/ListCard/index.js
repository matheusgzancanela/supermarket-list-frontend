import './index.css'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <div className="list-card-container">
      <img
        onClick={() => onCheckItem(item)}
        className="checkbox"
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        alt="checked-item"
      />
      <div className="list-card-text-container">
        <span className="list-card-title">{item.name}</span>
        <span className="list-card-subtitle">
          {item.quantity} {item.quantity > 1 ? 'unidades' : 'unidade'}
        </span>
      </div>
      <div className="arrow-icon-container" onClick={() => onClick(item)}>
        <img src="/images/arrow.svg" alt="arrow-icon" className="arrow-icon" />
      </div>
    </div>
  )
}
