import {useEffect, useState} from "react";

export function useFetch(apiFn: () => Promise<any>) {
  const [data, setData] = useState([]);
  const [error, setError] = useState<unknown>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async ()=> {
      try {
        setLoading(true);
        const response = await apiFn();
        setData(response.data.results);
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