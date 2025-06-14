import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const Body = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {user && (
        <div className="flex">
          <SideBar />
          <Outlet />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Body;
