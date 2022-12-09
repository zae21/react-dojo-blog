import { useEffect, useState } from "react";

const useFetch = (url) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Filed to fatch data from server");
                }
                return res.json();
            })
            .then(data => {
                setIsError(null);
                setData(data);
                setIsLoading(false);
            })
            .catch(err => {
                setIsError(err.message);
                setIsLoading(false);
            });
    }, []);

    return { isLoading, data, isError }
}

export default useFetch;