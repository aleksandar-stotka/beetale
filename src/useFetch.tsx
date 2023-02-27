import React, { use } from "react";
import { useState, useEffect } from "react";

export const useFetch = (url:any) => {
  const [data, setData] = useState<Object>([]);
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
        const newData = await res.json();
        setLoading(false)

        setData(newData)
        console.log(data)

      } catch (err) {}

      fetchData()

      return () => {
        controler.abort()
      }
    };
   
  }, [url]);

  return {data,loading}

}

