import { useState } from "react";
import "./TravelList.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

function TravelList() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="container">
      <div className="main-content travel-app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList item={items} />
        <Stats />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <h1>Travel Packer ✈️🧳</h1>
    </div>
  );
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItems = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItems);
  }

  return (
    <div className="form-container card">
      <h3>Add Your Items</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="item-name">Item Name</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id="item-name"
            type="text"
            placeholder="e.g. T-shirt "
          />
        </div>
        <div className="form-group">
          <label htmlFor="item-quantity">Quantity</label>
          <select
            onChange={(e) => setQuantity(Number(e.target.value))}
            value={quantity}
            name=""
            id="item-quantity"
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

function PackingList({ item }) {
  return (
    <div className="packing-list-container card">
      <h3>Your Packing List</h3>
      {item.map((item) => (
        <div
          key={item.id}
          className={`item-list ${item.packed ? "strike" : ""}`}
        >
          <Item item={item} />
        </div>
      ))}

      {item.length !== 0 ? (
        <button className="btn-clear-list">Clear List</button>
      ) : (
        ""
      )}
    </div>
  );
}

function Item({ item }) {
  return (
    <>
      <div className="item">
        {
          <span>
            {!item.packed ? (
              <input className="checkbox" type="checkbox" />
            ) : (
              <input className="checkbox" type="checkbox" checked />
            )}
          </span>
        }
        <span>{item.quantity}</span>
        <span>{item.description}</span>
      </div>
      <button className="item-delete">x</button>
    </>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        💼 You have 22 items on your list, and you have already packed 1 (5%)
      </em>
    </footer>
  );
}

export default TravelList;
