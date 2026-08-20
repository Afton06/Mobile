import Icon from "../components/icons/Icon";
import { useApp } from "../context/AppContext";

export default function Settings() {
  const { showToast } = useApp();

  return (
    <section>
      <div className="eyebrow muted">Preferências</div>
      <h1 className="title">Configurações</h1>

      <div className="profile-box">
        <div className="avatar">C</div>
        <div><div className="nm">Carlos Ferreira</div><div className="rl">Operador Principal · Fazenda São Bento</div></div>
      </div>

      <div className="grp-label">LIMITES DE ALERTA</div>
      <div className="setting-list">
        <div className="setting-row" onClick={() => showToast("Ajustar temperatura máxima")}>
          <span className="k">Temperatura Máxima</span>
          <span className="v">90°C <Icon name="chevron" size={14} /></span>
        </div>
        <div className="setting-row" onClick={() => showToast("Ajustar vibração máxima")}>
          <span className="k">Vibração Máxima</span>
          <span className="v">3.0 mm/s <Icon name="chevron" size={14} /></span>
        </div>
        <div className="setting-row" onClick={() => showToast("Ajustar pressão mínima")}>
          <span className="k">Pressão Mínima Óleo</span>
          <span className="v">2.5 bar <Icon name="chevron" size={14} /></span>
        </div>
      </div>

      <div className="grp-label">NOTIFICAÇÕES</div>
      <div className="setting-list">
        <div className="setting-row" onClick={() => showToast("Alertas críticos: ativo")}>
          <span className="k">Alertas Críticos</span>
          <span className="v">Ativo <Icon name="chevron" size={14} /></span>
        </div>
        <div className="setting-row" onClick={() => showToast("Editar horário do relatório diário")}>
          <span className="k">Relatório Diário</span>
          <span className="v">18:00 <Icon name="chevron" size={14} /></span>
        </div>
        <div className="setting-row" onClick={() => showToast("Editar resumo semanal")}>
          <span className="k">Resumo Semanal</span>
          <span className="v">Dom 08:00 <Icon name="chevron" size={14} /></span>
        </div>
      </div>

      <button className="logout-btn" onClick={() => showToast("Sessão encerrada")}>
        <Icon name="logout" />
        Sair da Conta
      </button>
    </section>
  );
}
