import { useNavigate } from "react-router-dom";
import Icon from "../icons/Icon";
import { useApp } from "../../context/AppContext";
import { formatUpdated } from "../../utils/format";

// Usado na Home (lista curta) e reaproveitável em outras telas.
export default function MachineListItem({ machine }) {
  const navigate = useNavigate();
  const { setSelectedMachineId } = useApp();

  function open() {
    setSelectedMachineId(machine.id);
    navigate("/dashboard");
  }

  return (
    <div className="machine-item" onClick={open}>
      <div className="machine-icon"><Icon name="machine" size={22} /></div>
      <div className="machine-info">
        <div className="row1">
          <span className={`status-dot ${machine.status}`} />
          <span className="name">{machine.name}</span>
        </div>
        <div className="model">{machine.model}</div>
      </div>
      <div className="machine-side">
        <div className="updated">{formatUpdated(machine.updatedAt)}</div>
      </div>
    </div>
  );
}
