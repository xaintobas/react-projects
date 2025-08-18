import React from "react";
import Button from "./Button";

export default function Friend({ friend, selectedFriend, onSelectFriend }) {
  const selected = selectedFriend?.id === friend.id;
  return (
    <li className={selected ? "selected" : ""}>
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
        <p className="light-grey">You and {friend.name} are even</p>
      )}

      <Button onClick={() => onSelectFriend(friend)}>
        {selected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
