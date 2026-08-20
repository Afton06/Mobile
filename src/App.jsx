import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveLayout from "./components/layout/ResponsiveLayout";
import { AppProvider } from "./context/AppContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Machines from "./pages/Machines";
import Reports from "./pages/Reports";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ResponsiveLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/maquinas" element={<Machines />} />
            <Route path="/relatorios" element={<Reports />} />
            <Route path="/alertas" element={<Alerts />} />
            <Route path="/config" element={<Settings />} />
          </Routes>
        </ResponsiveLayout>
      </BrowserRouter>
    </AppProvider>
  );
}
