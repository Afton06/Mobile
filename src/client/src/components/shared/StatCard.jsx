import { Link } from "react-router-dom";
import Icon from "../icons/Icon";

export default function StatCard({ to, icon, iconColor, value, label }) {
  return (
    <Link to={to} className="stat-card">
      <div className="top-row">
        <Icon name={icon} style={iconColor ? { color: iconColor } : undefined} />
        <Icon name="chevron" className="chev" />
      </div>
      <div className="value">{value}</div>
      <div className="label">{label}</div>
    </Link>
  );
}
