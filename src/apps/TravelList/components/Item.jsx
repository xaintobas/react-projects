export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <>
      <div className="item">
        <span>
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => onToggleItem(item.id)}
          />
        </span>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          <span className="item-quantity">{item.quantity}</span>
          <span>{item.description}</span>
        </span>
      </div>
      <button className="item-delete" onClick={() => onDeleteItem(item.id)}>
        x
      </button>
    </>
  );
}
