import { useState } from "react";
import { useReport } from "../hooks/useReport";
import ReportBars from "../components/reports/ReportBars";
import Icon from "../components/icons/Icon";

const TABS = [
  { key: "diario", label: "Diário" },
  { key: "mensal", label: "Mensal" },
  { key: "anual", label: "Anual" },
];

export default function Reports() {
  const [periodo, setPeriodo] = useState("diario");
  const { report, loading } = useReport(periodo);

  return (
    <section>
      <div className="eyebrow">Histórico e Análise</div>
      <h1 className="title">Relatórios</h1>

      <div className="tabs">
        {TABS.map((t) => (
          <div key={t.key} className={`tab ${periodo === t.key ? "active" : ""}`} onClick={() => setPeriodo(t.key)}>
            {t.label}
          </div>
        ))}
      </div>

      {loading || !report ? <p>Carregando…</p> : (
        <>
          <div className="stat-row3">
            <div className="box"><div className="v">{report.stats.eficiencia}</div><div className="l">Eficiência</div></div>
            <div className="box"><div className="v">{report.stats.horas}</div><div className="l">Horas Op.</div></div>
            <div className="box"><div className="v">{report.stats.alertas}</div><div className="l">Alertas</div></div>
          </div>

          <div className="card-box">
            <div className="kicker">EFICIÊNCIA OPERACIONAL</div>
            <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 14 }}>{report.chartLabel}</div>
            {report.bars.length > 0
              ? <ReportBars bars={report.bars} />
              : <p style={{ color: "var(--muted)", fontSize: 13 }}>Ainda sem histórico suficiente para o gráfico.</p>}
          </div>

          <div className="section-head"><h2>Relatórios Gerados</h2></div>
          {report.items.length === 0 && <p style={{ color: "var(--muted)", fontSize: 13 }}>Nenhum relatório gerado ainda.</p>}
          {report.items.map((it, i) => (
            <div className="report-item" key={i}>
              <div className="ic"><Icon name="doc" size={17} /></div>
              <div className="txt"><div className="t1">{it.title}</div><div className="t2">{it.subtitle}</div></div>
              <div className={`when ${it.today ? "today" : ""}`}>{it.when}</div>
            </div>
          ))}
        </>
      )}
    </section>
  );
}
