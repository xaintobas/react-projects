import { useState } from "react";

const ListItem = ({ items, setItems }) => {
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const tooglePacked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  };

  const clearList = () => {
    setItems([]);
  };

  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items.slice();
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  return (
    <div className="">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-black font-bold text-[18px]">Your Packing List</h2>
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
          name=""
          id=""
          className="text-black border border-slate-500 rounded py-1 px-1 outline-0 text-[15px]"
        >
          <option value="input">Default</option>
          <option value="packed">Packed</option>
          <option value="description">Description</option>
        </select>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <li
            key={item.id}
            className={`flex justify-between px-4 py-3 my-2 rounded ${item.packed ? "bg-[#c1e1c8]" : "bg-slate-300"}`}
          >
            <div className="text-black">
              <span>
                <input
                  onChange={() => tooglePacked(item.id)}
                  type="checkbox"
                  className="mr-2.5"
                  checked={item.packed}
                />
              </span>
              <span className={item.packed ? "line-through" : ""}>
                {item.quantity} {item.description}
              </span>
            </div>
            <div>
              <button
                className="cursor-pointer"
                onClick={() => handleDeleteItem(item.id)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <button
          className="bg-[#1a3154] w-full py-2 font-bold mt-4 cursor-pointer"
          onClick={clearList}
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default ListItem;
