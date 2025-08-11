import { useState } from "react";
import "./TravelList.css";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

function Logo() {
  return (
    <div className="logo">
      <h1>Travel ✈️</h1>
    </div>
  );
}

function TravelList() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="container">
      <div className="main-content travel-app">
        <Logo />
        <Form onAddItems={handleItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
        <Stats items={items} />
      </div>
    </div>
  );
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItems = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItems);

    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="form-container card">
      <h3>Add Your Items</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="item-name">Item Name</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="item-name"
            type="text"
            placeholder="e.g T-shirt"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Quantity</label>
          <select
            value={quantity}
            name=""
            id=""
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <button>Add Item</button>
      </form>
    </div>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="packing-list-container card">
      <h3>Your Packing List</h3>
      {items.map((item) => (
        <div key={item.id} className="item-list">
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        </div>
      ))}
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
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

function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>You got everything! Ready to go ✈️</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        💼 You have {numItems} items on your list, and you have already packed{" "}
        {numPacked} ({percentagePacked}%)
      </em>
    </footer>
  );
}

export default TravelList;
