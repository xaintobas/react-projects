import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-slate-50 px-3 py-3.5 text-center border-t-2 border-[#8b8b8b2a]">
      <div className="container">
        <span className="font-medium text-[20px]">
          Built with React by{" "}
          <Link className="text-[#679ff5]" to="/">
            Stephen
          </Link>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
