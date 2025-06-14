import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Header = () => {
  return (
    <div className="">
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
              <MenubarRadioItem className="cursor-pointer" value="logout">
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
