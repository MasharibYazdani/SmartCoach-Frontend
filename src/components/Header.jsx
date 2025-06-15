import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + "/admin/logout",
        {},
        { withCredentials: true }
      );

      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.error("Logout Erro " + error.message);
    }
  };

  return (
    <div>
      <Menubar className="flex justify-between">
        <div className="p-2 rounded cursor-pointer font-extrabold bg-blue-400 text-white">
          My Coaching
        </div>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">Profile</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup>
              <MenubarRadioItem className="cursor-pointer" value="view-profile">
                View Profile
              </MenubarRadioItem>
              <MenubarRadioItem
                className="cursor-pointer"
                onClick={handleLogout}
                value="logout"
              >
                Logout
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Header;
