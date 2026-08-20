import { Link } from "react-router-dom";
import { useMachines } from "../hooks/useMachines";
import { useAlerts } from "../hooks/useAlerts";
import StatCard from "../components/shared/StatCard";
import MachineListItem from "../components/machines/MachineListItem";

export default function Home() {
  const { machines } = useMachines();
  const { alerts } = useAlerts();
  const ativas = machines.filter((m) => m.status !== "critico").length;

  return (
    <section>
      <div className="greeting">Bom dia, Carlos</div>
      <h1 className="title">Visão Geral da Fazenda</h1>

      <div className="stat-grid">
        <StatCard to="/maquinas" icon="machine" value={`${ativas}/${machines.length}`} label="Máquinas Ativas" />
        <StatCard to="/alertas" icon="warning" iconColor="var(--warning)" value={alerts.length} label="Alertas Hoje" />
        <StatCard to="/relatorios" icon="reports" iconColor="var(--primary)" value="89%" label="Eficiência Média" />
        <StatCard to="/relatorios" icon="clock" value="47h" label="Horas de Op." />
      </div>

      <div className="section-head">
        <h2>Suas Máquinas</h2>
        <Link to="/maquinas" className="link">Ver todas</Link>
      </div>
      <div>
        {machines.map((m) => <MachineListItem key={m.id} machine={m} />)}
      </div>
    </section>
  );
}
