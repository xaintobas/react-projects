import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="packing-list-container card">
      {items.length <= 0 ? (
        <div className="text-center">
          <h3>Your Packing List is Empty</h3>
          <p>Start by adding items to your list!</p>
        </div>
      ) : (
        <div className="packing-list-head">
          <h3>Your Packing List</h3>
          <select
            name=""
            id=""
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="input">SORT BY INPUT ORDER</option>
            <option value="description">SORT BY INPUT DESCRIPTION</option>
            <option value="packed">SORT BY PACKED STATUS</option>
          </select>
        </div>
      )}

      {sortedItems.map((item) => (
        <div
          key={item.id}
          className="item-list"
          style={
            item.packed
              ? { background: "rgb(209 249 223)" }
              : { background: "rgb(241 244 247) " }
          }
        >
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        </div>
      ))}
      {items.length > 0 ? (
        <div className="btn-clear-list-container">
          <button onClick={onClearList} className="btn-clear-list">
            Clear List
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
