import { useState, useEffect } from "react";

export const useFecth = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(url);

      const json = await resp.json();

      setData(json);
    }

    fetchData();
  }, [url]);

  return { data };
};