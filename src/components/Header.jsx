import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" sticky backdrop-blur top-0 z-40 px-4 py-3.5 text-slate-50 font-bold text-2xl border-b-2 border-[#8b8b8b2a]">
      <div className="w-full max-w-7xl mx-auto">
        <nav>
          <Link key="logo" to="/">
            ⚛️ React Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
