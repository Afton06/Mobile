import { NavLink } from "react-router-dom";
import Icon from "../icons/Icon";
import { NAV_ITEMS } from "./navConfig";

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          <Icon name={item.icon} size={19} />
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}
