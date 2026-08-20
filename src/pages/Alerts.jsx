import { useAlerts } from "../hooks/useAlerts";
import AlertCard from "../components/alerts/AlertCard";

export default function Alerts() {
  const { alerts, loading } = useAlerts();

  return (
    <section>
      <div className="eyebrow">Notificações do Sistema</div>
      <h1 className="title">Alertas</h1>
      {loading ? <p>Carregando…</p> : alerts.map((a) => <AlertCard key={a.id} alert={a} />)}
    </section>
  );
}
