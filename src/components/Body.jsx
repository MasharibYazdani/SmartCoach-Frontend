import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Body = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    user && (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex">
          <SideBar />
          <Outlet />
        </div>
        <Footer />
      </div>
    )
  );
};

export default Body;
