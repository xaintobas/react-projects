import React from "react";
import Button from "./Button";

export default function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ₦{Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ₦{Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && (
        <p className="black">You and {friend.name} are even</p>
      )}

      <Button>{friend ? "Select" : "Close"}</Button>
    </li>
  );
}
