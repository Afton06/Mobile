import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import Toast from "../shared/Toast";

// Desktop: sidebar sempre visível (sem drawer/overlay), sem bottom nav.
export default function DesktopLayout({ children }) {
  return (
    <div className="app app--desktop">
      <Sidebar variant="static" />
      <div className="app-main">
        <Header showMenuButton={false} />
        <div className="content">{children}</div>
      </div>
      <Toast />
    </div>
  );
}
