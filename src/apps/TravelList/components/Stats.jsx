const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <div className="bg-[#132f72] py-2.5 px-2.5 text-center roundeds">
        <em>Start adding some items to your packing list 🚀</em>
      </div>
    );
  }
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((packedItems / items.length) * 100);
  // console.log(packedItems);
  return (
    <div className="bg-[#132f72] py-2.5 px-2.5 text-center roundeds">
      <em>
        {percentagePacked === 100
          ? `You have packed everything. Ready to go! ✈️`
          : `💼 You have ${items.length} items on your list, and you have already packed ${packedItems} (${percentagePacked}%)`}
      </em>
    </div>
  );
};

export default Stats;
