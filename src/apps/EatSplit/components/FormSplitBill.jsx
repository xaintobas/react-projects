import React, { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const friendExpense = bill && userExpense ? bill - userExpense : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSplitBill(e) {
    e.preventDefault();

    onSplitBill(whoIsPaying === "user" ? friendExpense : -userExpense);

    setBill("");
    setUserExpense("");
  }

  return (
    <div className="">
      <form className="form-split-bill" onSubmit={handleSplitBill}>
        <h2>Split a bill with {selectedFriend.name}</h2>
        {/* <span className="divider"></span> */}

        <label>💰 Bill value</label>
        <input
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          type="number"
        />

        <label>🧍‍♀️ Your expense</label>
        <input
          value={userExpense}
          onChange={(e) =>
            setUserExpense(
              Number(e.target.value) > bill
                ? userExpense
                : Number(e.target.value)
            )
          }
          type="number"
        />

        <label>👫 {selectedFriend.name}'s expense</label>
        <input
          value={friendExpense}
          type="number"
          disabled
          className="friend-expense"
        />
        <label>🤑 Who is paying the bill</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
        <Button>Split bill</Button>
      </form>
    </div>
  );
}
