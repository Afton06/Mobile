import Icon from "../icons/Icon";

const ICON_BY_LEVEL = { atencao: "warning", critico: "critical", resolvido: "resolved", info: "info" };

export default function AlertCard({ alert }) {
  return (
    <div className={`alert-card ${alert.level}`}>
      <div className="ic"><Icon name={ICON_BY_LEVEL[alert.level] || "info"} size={16} /></div>
      <div className="body">
        <div className="head-row">
          <span className="name">{alert.machine}</span>
          <span className={`alert-tag ${alert.level}`}>{alert.label}</span>
        </div>
        <div className="msg">{alert.message}</div>
        <div className="foot">
          <span>{alert.sensor}</span>
          <span>{typeof alert.when === "string" ? alert.when : new Date(alert.when).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</span>
        </div>
      </div>
    </div>
  );
}
