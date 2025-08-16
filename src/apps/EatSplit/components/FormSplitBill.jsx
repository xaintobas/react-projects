import React from "react";
import Button from "./Button";

export default function FormSplitBill() {
  return (
    <div className="">
      <form className="form-split-bill">
        <h2>Split a bill with </h2>
        <span className="divider"></span>
        <label>💰 Bill value</label>
        <input type="text" />
        <label>🧍‍♀️ Your expense</label>
        <input type="text" />
        <label>👫 's expense</label>
        <input type="text" disabled className="friend-expense" />
        <label>🤑 Who is paying the bill</label>
        <select>
          <option value="user">You</option>
          <option value="friend"></option>
        </select>
        <Button>Split bill</Button>
      </form>
    </div>
  );
}
