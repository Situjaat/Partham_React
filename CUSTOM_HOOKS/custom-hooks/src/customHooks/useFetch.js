import { useEffect } from "react";
import { useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then((res) => res.json())
        .then ((json) => {
            setData(json)
            setLoading(false)
        });
    }, [url]);

    return {data, loading};
}

export default useFetch;