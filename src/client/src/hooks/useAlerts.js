import { useEffect, useState } from "react";
import { alertService } from "../services/alertService";

export function useAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    alertService.list().then((data) => {
      setAlerts(data);
      setLoading(false);
    });
  }, []);

  return { alerts, loading };
}
