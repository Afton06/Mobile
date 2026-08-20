import { createContext, useContext, useState, useCallback, useRef } from "react";

// Estado compartilhado simples: qual máquina está selecionada no
// Dashboard, e o toast global. Equivalente ao "window.SensusApp" +
// "Router.showToast" da versão vanilla, só que do jeito React (Context).
const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [selectedMachineId, setSelectedMachineId] = useState(null);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const showToast = useCallback((msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1800);
  }, []);

  return (
    <AppContext.Provider value={{ selectedMachineId, setSelectedMachineId, toast, showToast }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp precisa estar dentro de <AppProvider>");
  return ctx;
}
