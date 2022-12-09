import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error(res.statusText)
                    }
                    return res.json();
                })
                .then(data => {
                    setIsError(null);
                    setData(data);
                    setIsLoading(false);
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log(err.message);
                    } else {
                        setIsError(err.message);
                        setIsLoading(false);
                    }
                });
        }, 1000);

        return () => abortCont.abort();
    }, [url]);

    return { isLoading, data, isError }
}

export default useFetch;