import { NavLink, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../../constants";
import Icon from "../../common/Icon";

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col p-4 h-screen bg-[#f9f9fb] border-r-[1px] w-[15rem]">
      {sidebarLinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.route}
          className={`flex items-center gap-x-3 h-10 hover:bg-gray-200 px-3 py-2 rounded-md ${
            pathname === link.route && "bg-gray-300"
          }`}
        >
          <Icon name={link.icon} className={`text-[24px] ${pathname === link.route && "text-gray-950"}`} />
          <span>{link.name}</span>
        </NavLink>
      ))}
    </div>
  );
}