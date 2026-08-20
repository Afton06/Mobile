import Icon from "../icons/Icon";

const BELT_COLOR = { NORMAL: "var(--primary)", ATENCAO: "var(--warning)", CRITICO: "var(--danger)" };

export default function TileGrid({ machine }) {
  return (
    <div className="tile-grid">
      <div className="tile">
        <div className="top"><Icon name="oil" size={14} />Pressão Óleo</div>
        <div className="v">{machine.oil} bar</div>
      </div>
      <div className="tile">
        <div className="top"><Icon name="pulse" size={14} />Correia</div>
        <div className="v" style={{ color: BELT_COLOR[machine.belt] || "var(--text)" }}>{machine.belt}</div>
      </div>
      <div className="tile">
        <div className="top"><Icon name="filter" size={14} />Filtro Ar</div>
        <div className="v">{machine.filtro}%</div>
      </div>
      <div className="tile">
        <div className="top"><Icon name="clock" size={14} />Horímetro</div>
        <div className="v">{machine.horimetro}</div>
      </div>
    </div>
  );
}
