import React, { useState } from "react";
import "./EatSplit.css";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";

const EatSplit = () => {
  const initialFriends = [
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
    {
      id: 1001,
      name: "Stephen",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: -7,
    },
  ];

  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriend, setShowAddFriend] = useState(null);

  function toogleAddFriend() {
    setShowAddFriend(!showAddFriend);
    setSelectedFriend(null);
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
  }

  function handleSelectedFriend(friend) {
    const selected = selectedFriend?.id === friend.id;
    setSelectedFriend(selected ? null : friend);
    setShowAddFriend(null);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="container">
      <div className="main-content eat-split">
        <h1>Eat Split Component</h1>
        <div className="eat-split-app">
          <div className="sidebar">
            <FriendList
              friends={friends}
              selectedFriend={selectedFriend}
              onSelectFriend={handleSelectedFriend}
            />
            {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
            <Button onClick={toogleAddFriend}>
              {showAddFriend ? "Close" : "Add Friend"}
            </Button>
          </div>
          {selectedFriend && (
            <FormSplitBill
              selectedFriend={selectedFriend}
              onSplitBill={handleSplitBill}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EatSplit;
