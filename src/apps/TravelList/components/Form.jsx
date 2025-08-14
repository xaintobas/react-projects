import { useState } from "react";

export default function Form({ onAddItems }) {
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
