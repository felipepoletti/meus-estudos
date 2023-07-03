import { useState, useEffect } from "react";

export const useFecth = (url) => {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  
  // refatorando o Post
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      setMethod(method);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const resp = await fetch(url);

        const json = await resp.json();

        setData(json);
      } catch(error) {
        console.log(error.message);
        setError("Houve algum erro ao carregar os dados.");
      };
      
      setLoading(false);
    }

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
  
        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config, method, url])

  return { data, httpConfig, loading, error };
};