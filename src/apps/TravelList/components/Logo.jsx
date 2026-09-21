const Logo = () => {
  const style = {
    fontFamily: "Monoton",
  };
  return (
    <div className="text-center">
      <h1 style={style} className="text-3xl uppercase tracking-[.3rem]">
        Travel List ✈️
      </h1>
      <p className="mt-5">What do you need for your trip?</p>
    </div>
  );
};

export default Logo;
