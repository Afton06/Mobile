import { useEffect, useState, useCallback } from "react";
import { machineService } from "../services/machineService";

// "Controller" — busca a lista de máquinas e expõe loading/erro/refresh
// pras páginas, sem que elas precisem saber como os dados chegam.
export function useMachines() {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setLoading(true);
    const data = await machineService.list();
    setMachines(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return { machines, loading, reload };
}
