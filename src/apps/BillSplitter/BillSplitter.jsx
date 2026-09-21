import React, { useState } from "react";

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

const BillSplitter = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [formAddFriend, setFormAddFriend] = useState(false);
  const [formSplitBill, setFormSplitBill] = useState(1);
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState("https://i.pravatar.cc/48");
  const [selectedFriend, setSelectedFriend] = useState(null);

  const toggleFormAddFriend = () => {
    setFormAddFriend((f) => !f);
    setSelectedFriend(null);
    setFriendName("");
  };

  return (
    <>
      <div className="text-slate-300 text-center">
        <h1 className="text-[#679ff5] font-bold text-3xl">
          Eat Split Component
        </h1>
        <p className="mt-2 text-[18px]">
          A web application to help you and your friends split bills. Easily add
          friends, record shared expenses, and see who owes who.
        </p>
      </div>
      <div className="w-full md:max-w-200 mx-auto  grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <FriendList
            friends={friends}
            onSelectFriend={setSelectedFriend}
            selectedFriend={selectedFriend}
            setFormAddFriend={setFormAddFriend}
          />
          {formAddFriend && (
            <FormAddFriend
              friendImage={friendImage}
              setFriendImage={setFriendImage}
              friendName={friendName}
              setFriendName={setFriendName}
              onAddFriend={setFriends}
              setFormAddFriend={setFormAddFriend}
            />
          )}
          <div className="flex justify-end mt-4">
            <Button onClick={toggleFormAddFriend}>
              {formAddFriend ? "Close" : "Add Friend"}
            </Button>
          </div>
        </div>
        <div>
          {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
        </div>
      </div>
      {/* <div className="my-0 mx-auto bg-[#1e293b] pt-5 pb-10 px-10 w-full md:max-w-150 rounded-lg"></div> */}
    </>
  );
};

const FriendList = ({
  friends,
  onSelectFriend,
  selectedFriend,
  setFormAddFriend,
}) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
          setFormAddFriend={setFormAddFriend}
        />
      ))}
    </ul>
  );
};

const Friend = ({
  friend,
  onSelectFriend,
  selectedFriend,
  setFormAddFriend,
}) => {
  const { id, image, name, balance } = friend;
  const textProperty = `${balance < 0 ? `text-red-500` : balance === 0 ? `text-slate-400` : `text-green-500`}`;
  const textString = `${balance < 0 ? `You owe ${name} ₦${Math.abs(balance)}` : balance === 0 ? `You and ${name} are even` : `${name} owes you ₦${Math.abs(balance)}`}`;

  const handleSelectedFriend = (selectedFr) => {
    onSelectFriend(selectedFr);
    setFormAddFriend(false);
    console.log(selectedFr);
  };

  return (
    <li
      className={`flex gap-5 mb-5 justify-between items-center bg-[#1e293bc0] border ${selectedFriend?.id === id ? `border-[#2a72df]` : `border-[#ffffff46]`} hover:border-[#2a72df] transition-all duration-500 p-4 rounded-lg w-full`}
    >
      <div className="flex gap-x-4 items-center">
        <img className="rounded-full" src={image} alt={image} />
        <div>
          <h3 className="uppercase font-bold">{name}</h3>
          <p className={textProperty}>{textString}</p>
        </div>
      </div>
      <Button onClick={() => handleSelectedFriend(friend)}>Select</Button>
    </li>
  );
};

const FormAddFriend = ({
  friendImage,
  setFriendImage,
  friendName,
  setFriendName,
  onAddFriend,
  setFormAddFriend,
}) => {
  const onAddNewFriend = (e) => {
    e.preventDefault();
    if (!friendName || !friendImage) return;

    const newFriend = {
      id: crypto.randomUUID(),
      image: friendImage + "/?u=" + crypto.randomUUID(),
      name: friendName,
      balance: 0,
    };
    onAddFriend((f) => [...f, newFriend]);
    setFormAddFriend(false);
  };
  return (
    <form className="flex flex-col gap-3 justify-center bg-[#1e293bc0] border border-[#ffffff46] p-5 rounded-lg">
      <div className="flex justify-between gap-x-3 items-center">
        <label htmlFor="friendName" className="font-bold">
          👫 Friend name
        </label>
        <input
          id="friendName"
          type="text"
          placeholder="Friend's Name"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
          className="bg-[#525e728e] border border-[#ffffff46] rounded-[5px] text-center py-1 px-4 outline-none"
        />
      </div>
      <div className="flex justify-between gap-x-3 items-center">
        <label htmlFor="imageURL" className="font-bold">
          🌄 Image URL
        </label>
        <input
          id="imageURL"
          type="text"
          placeholder={friendImage}
          value={friendImage}
          disabled
          onChange={(e) => setFriendImage(e.target.value)}
          className="bg-[#525e728e] border border-[#ffffff46] rounded-[5px] text-center py-1 px-4 outline-none  text-slate-300"
        />
      </div>
      <div className="flex justify-end mt-2">
        <Button onClick={onAddNewFriend}>Add Friend</Button>
      </div>
    </form>
  );
};

const FormSplitBill = ({ selectedFriend }) => {
  const { name, balance } = selectedFriend;
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  // const [friendExpense, setFriendExpense] = useState("");
  const friendExpense = bill ? bill - yourExpense : "";

  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !yourExpense) return;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 justify-center bg-[#1e293bc0] border border-[#ffffff46] p-5 rounded-lg"
    >
      <h2 className="uppercase text-2xl font-bold">Split a bill with {name}</h2>
      <div className="flex justify-between gap-x-3 items-center">
        <label htmlFor="friendName" className="font-bold">
          💰 Bill Value
        </label>
        <input
          id="friendName"
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          placeholder="Bill Value"
          className="bg-[#525e728e] border border-[#ffffff46] rounded-[5px] text-center py-1 px-4 outline-none"
        />
      </div>
      <div className="flex justify-between gap-x-3 items-center">
        <label htmlFor="yourName" className="font-bold">
          🧍‍♀️ Your Expense
        </label>
        <input
          id="yourName"
          type="number"
          value={yourExpense}
          onChange={(e) =>
            setYourExpense(
              Number(e.target.value) > bill
                ? yourExpense
                : Number(e.target.value),
            )
          }
          placeholder="Your Expense"
          className="bg-[#525e728e] border border-[#ffffff46] rounded-[5px] text-center py-1 px-4 outline-none"
        />
      </div>
      <div className="flex justify-between gap-x-3 items-center">
        <label htmlFor="friendName" className="font-bold">
          👫 {name}'s Expense
        </label>
        <input
          id="friendName"
          type="number"
          disabled
          placeholder={`${name}'s Expense`}
          value={friendExpense}
          className="bg-[#1f23298e] border border-[#ffffff46] rounded-[5px] text-center py-1 px-4 outline-none"
        />
      </div>
      <div className="flex justify-between gap-x-3 items-center">
        <label htmlFor="friendName" className="font-bold">
          🤑 Who is paying the bill
        </label>
        <select
          name=""
          id=""
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
          className="bg-[#525e728e] border border-[#ffffff46] rounded-[5px] text-center py-1 px-4 outline-none"
        >
          <option value="user">You</option>
          <option value="friend">{name}</option>
        </select>
      </div>

      <div className="flex justify-end mt-2">
        <Button>Split Bill</Button>
      </div>
      {/* <button className="justify-self-end bg-amber-300">Hello Worlds</button> */}
    </form>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#2a72df] px-5 py-1 font-bold rounded-full cursor-pointer "
    >
      {children}
    </button>
  );
};
export default BillSplitter;
