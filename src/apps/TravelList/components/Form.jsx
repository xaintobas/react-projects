import { useState } from "react";

const Form = ({ setItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setSetQuantity] = useState("");

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    handleAddItems(newItem);

    setDescription("");
    setSetQuantity("");
  };

  return (
    <>
      <div className="bg-slate-200 rounded-lg pt-4 pb-10 px-4 w-full">
        <h2 className="text-black font-bold text-2xl mb-3">Add Your Items</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="my-2">
            <label
              htmlFor="itemName"
              className="block text-slate-700 font-bold mb-1.5 text-[18px]"
            >
              Item Name
            </label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="itemName"
              type="text"
              placeholder="e.g T-shirt"
              className="text-black border border-slate-500 rounded py-1.5 px-4 w-full outline-0"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="itemQuantity"
              className="block text-slate-700 font-bold mb-1.5 text-[18px]"
            >
              Quantity
            </label>
            <select
              id="itemQuantity"
              value={quantity}
              onChange={(e) => setSetQuantity(e.target.value)}
              className="text-black border border-slate-500 rounded py-1.5 px-4 w-full outline-0"
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <button className="bg-[#1a3154] w-full py-2 font-bold mt-4 cursor-pointer">
            Add Item
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
