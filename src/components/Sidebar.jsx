import { Home, Users, Book, Receipt, UserPlus } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="h-full w-16 md:w-64 bg-white border-r shadow-sm flex flex-col items-center md:items-start transition-all duration-300">
      <div className="p-4 text-xl font-bold text-primary hidden md:block">
        MyApp
      </div>
      <nav className="flex flex-col gap-2 w-full px-2">
        <SidebarItem icon={<Home size={20} />} label="Dashboard" to="/" />
        <SidebarItem
          icon={<Users size={20} />}
          label="Students"
          to="/students"
        />
        <SidebarItem icon={<Book size={20} />} label="Courses" to="/courses" />
        <SidebarItem
          icon={<UserPlus size={20} />}
          label="Enrollments"
          to="/enrollments"
        />
        <SidebarItem icon={<Receipt size={20} />} label="Fees" to="/fees" />
      </nav>
    </div>
  );
};

function SidebarItem({ icon, label, to }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex items-center md:justify-start justify-center my-2 gap-3 p-3 rounded-lg text-sm transition 
        ${
          isActive
            ? "bg-blue-300 text-primary font-medium"
            : "hover:bg-gray-100"
        }`
      }
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </NavLink>
  );
}

export default SideBar;
