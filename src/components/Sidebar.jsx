import { Home, Users, Book, Receipt, UserPlus } from "lucide-react";

const SideBar = () => {
  return (
    <div className="h-screen w-64 bg-white border-r shadow-sm flex flex-col justify-between">
      {/* Top logo */}
      <div>
        <div className="p-6 text-2xl font-bold text-primary">MyApp</div>
        <nav className="px-4 flex flex-col gap-2">
          <SidebarItem icon={<Home size={20} />} label="Dashboard" />
          <SidebarItem icon={<Users size={20} />} label="Students" />
          <SidebarItem icon={<Book size={20} />} label="Courses" />
          <SidebarItem icon={<UserPlus size={20} />} label="Enrollments" />

          <SidebarItem icon={<Receipt size={20} />} label="Fees" />
        </nav>
      </div>
    </div>
  );
};

function SidebarItem({ icon, label }) {
  return (
    <button className="flex items-center p-3 rounded-lg text-sm cursor-pointer hover:bg-gray-100 transition">
      {icon}
      <span className="ml-3">{label}</span>
    </button>
  );
}

export default SideBar;
