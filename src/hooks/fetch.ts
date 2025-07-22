import {useEffect, useState} from "react";

export function useFetch<T>(apiFn: () => Promise<any>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async ()=> {
      try {
        setLoading(true);
        const response = await apiFn();
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [apiFn]);

  return {data, error, loading}
}