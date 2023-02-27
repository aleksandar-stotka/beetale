import React, { use } from "react";
import { useState, useEffect } from "react";

function useFetch(url:any) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controler = new AbortController();

    const fetchData = async () => {
        setLoading(true)
      try {
        const res = await fetch(url, { signal: controler.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setLoading(false)

        setData(data)

      } catch (err) {}

      fetchData()

      return () => {
        controler.abort()
      }
    };
   
  }, [url]);

  return {data,loading}

}

export default useFetch;
