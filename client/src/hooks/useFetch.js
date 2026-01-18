import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:5000"

export default function useFetch(url, initialState) {

    const [data, setData] = useState(initialState);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {

        if (!url || url.includes("undefined")) {
            return;
        };

        const abordController = new AbortController();

        (async () => {
            try {
                const response = await fetch(`${BASE_URL}${url}`, { signal: abordController.signal });

                if (!response.ok) {
                    setIsPending(false)
                    return {};
                };

                const result = await response.json();

                setData(result);
                setIsPending(false);
            } catch (error) {

                if (error.message !== "AbortError" && error.message !== "signal is aborted without reason") {

                    if (error.message === "Failed to fetch") {
                        setIsPending(false);
                        return alert("Server is unavailable");

                    };

                    setIsPending(false);

                    alert(error.message)

                }
            };
        })();

        return () => {
            abordController.abort();
        }

    }, [url]);

    async function request(url, method = "GET", body) {
        const options = { method: method };

        if (body) {
            options.headers = { "content-type": "application/json" };
            options.body = JSON.stringify(body);
        };

        try {
            const response = await fetch(`${BASE_URL}${url}`, options);

            if (!response.ok) {
                const result = await response.json();
                throw result;
            }

            const result = await response.json();

            setData(result);
            setIsPending(false);

            return result;
        } catch (error) {
            alert(error.message);
        };

    }

    return { data, setData, isPending, request };
};