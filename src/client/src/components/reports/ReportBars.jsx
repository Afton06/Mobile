export default function ReportBars({ bars }) {
  return (
    <div className="bars">
      {bars.map((b) => (
        <div className="bar-col" key={b.day}>
          <div className="bar" style={{ height: `${b.pct}%` }} />
          <span className="bar-lbl">{b.day}</span>
        </div>
      ))}
    </div>
  );
}
