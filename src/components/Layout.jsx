import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-[#101929] flex flex-col min-h-screen h-full w-full">
      <Header />
      <main className="flex-1 my-10 mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-y-10 mx-8 text-slate-200">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
