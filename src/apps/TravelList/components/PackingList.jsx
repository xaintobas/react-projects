import ListItem from "./ListItem";

const PackingList = ({ items, setItems }) => {
  return (
    <>
      <div className="bg-slate-200 rounded-lg pt-4 pb-10 px-4 w-full">
        {items.length == 0 ? (
          <div className="text-center py-7">
            <h2 className="text-black font-bold text-2xl mb-3">
              Your Packing List is Empty
            </h2>
            <p className="text-black">Start by adding items to your list!</p>
          </div>
        ) : (
          <div>
            <ListItem items={items} setItems={setItems} />
          </div>
        )}
      </div>
    </>
  );
};

export default PackingList;
