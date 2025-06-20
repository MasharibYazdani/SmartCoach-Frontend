import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./Sidebar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constant";

const Body = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProfile = async () => {
    try {
      const res = await axios.get(BASE_URL + "/admin/getAdminProfile", {
        withCredentials: true,
      });

      dispatch(addUser(res?.data?.data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      console.error("Error : " + error.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    user && (
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex flex-1">
          {/* Sidebar shrinks on small screens */}
          <SideBar />

          <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
            <Outlet />
          </main>
        </div>

        <Footer />
      </div>
    )
  );
};

export default Body;
