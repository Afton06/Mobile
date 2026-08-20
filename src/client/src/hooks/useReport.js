import { useEffect, useState } from "react";
import { reportService } from "../services/reportService";

export function useReport(periodo) {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    reportService.getByPeriod(periodo).then((data) => {
      setReport(data);
      setLoading(false);
    });
  }, [periodo]);

  return { report, loading };
}
