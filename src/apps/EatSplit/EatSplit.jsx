import React, { useState } from "react";
import "./EatSplit.css";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";

const EatSplit = () => {
  const initialFriends = [
    {
      id: 1001,
      name: "Stephen",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: -7,
    },
    {
      id: 1002,
      name: "James",
      image: "https://i.pravatar.cc/48?u=933378",
      balance: 22,
    },
    {
      id: 1003,
      name: "Peter",
      image: "https://i.pravatar.cc/48?u=933373",
      balance: 0,
    },
  ];

  const [friends, setFriends] = useState(initialFriends);

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
  }

  return (
    <div className="container">
      <div className="main-content eat-split">
        <h1>Eat Split Component</h1>
        <div className="eat-split-app">
          <div className="sidebar">
            <FriendList friends={friends} />

            <FormAddFriend onAddFriend={handleAddFriend} />

            <Button>Close</Button>
          </div>

          <FormSplitBill />
        </div>
      </div>
    </div>
  );
};

export default EatSplit;
