import { useMachines } from "../hooks/useMachines";
import { useApp } from "../context/AppContext";
import MachineCard from "../components/machines/MachineCard";

export default function Machines() {
  const { machines } = useMachines();
  const { selectedMachineId } = useApp();

  return (
    <section>
      <div className="eyebrow">Frota Cadastrada</div>
      <h1 className="title">Máquinas</h1>
      <div className="legend">
        <span className="item"><span className="status-dot operando" />Normal</span>
        <span className="item"><span className="status-dot alerta" />Alerta</span>
        <span className="item"><span className="status-dot critico" />Crítico</span>
      </div>
      <div>
        {machines.map((m) => (
          <MachineCard key={m.id} machine={m} selected={String(m.id) === String(selectedMachineId)} />
        ))}
      </div>
    </section>
  );
}
