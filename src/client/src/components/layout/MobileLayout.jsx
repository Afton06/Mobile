import { useState } from "react";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import BottomNav from "../shared/BottomNav";
import Toast from "../shared/Toast";

export default function MobileLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <div className="content">{children}</div>
      <BottomNav />
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} variant="drawer" />
      <Toast />
    </div>
  );
}
