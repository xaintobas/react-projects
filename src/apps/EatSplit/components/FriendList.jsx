import React from "react";
import FormAddFriend from "./FormAddFriend";
import Friend from "./Friend";

export default function FriendList({
  friends,
  selectedFriend,
  onSelectFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          selectedFriend={selectedFriend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
        />
      ))}
    </ul>
  );
}
