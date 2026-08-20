import { useState } from "react";
import Icon from "../icons/Icon";

export default function MachineSelector({ machines, selected, onSelect }) {
  const [open, setOpen] = useState(false);

  if (!selected) return null;

  return (
    <div className="selector" onClick={() => setOpen((o) => !o)}>
      <div className={`status-dot ${selected.status}`} />
      <div>
        <div className="lbl">Máquina Selecionada</div>
        <div className="val">{selected.name}</div>
      </div>
      <Icon name="chevronDown" className="chev" />
      {open && (
        <div className="dropdown open">
          {machines.map((m) => (
            <div
              key={m.id}
              className="opt"
              onClick={(e) => { e.stopPropagation(); onSelect(m.id); setOpen(false); }}
            >
              <span className={`status-dot ${m.status}`} />{m.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
