import { useState } from "react";
import Stats from "./components/Stats";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import ListItem from "./components/ListItem";

const initialItems = [
  { id: 1, description: "Bags", quantity: 1, packed: false },
  { id: 2, description: "Shoe", quantity: 2, packed: true },
  { id: 3, description: "Passport", quantity: 2, packed: false },
  { id: 4, description: "Ticket", quantity: 2, packed: true },
];

const TravelList = () => {
  const [items, setItems] = useState([...initialItems]);

  return (
    <div className="flex flex-col gap-10 w-full items-center my-0 mx-auto max-w-150">
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
};

export default TravelList;
