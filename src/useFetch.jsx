import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((data) => {
        if (!data.ok) {
          throw Error("Could not fetch data");
        }
        setIsPending(true);
        return data.json();
      })
      .then((data) => {
        setError(null);
        setIsPending(false);
        setData(data);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setIsPending(false);
          setError(error.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
