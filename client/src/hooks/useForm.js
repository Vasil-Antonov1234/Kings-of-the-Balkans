import { useEffect, useState } from "react";
import useFetch from "./useFetch.js";

export default function useForm(values, callback, dogId) {
    const { request } = useFetch();
    const [data, setData] = useState(values);

    function changeHandler(event) {
        setData(state => ({
            ...state,
            [event.target.name]: event.target.value
        }))
    }

    async function formHandler() {
        await callback(data, dogId);
        setData(values);
    };

    function formInputRegister(name) {
        return {
            name,
            value: data[name],
            onChange: changeHandler 
        }
    }

    useEffect(() => {

        if (dogId) {
            ( async () => {

                try {
                    const dog = await request(`/dogs/:${dogId}/details`);

                    setData(dog);
                } catch (error) {
                    alert(error.message);
                };
                
            })();
        };

    }, [dogId]);

    return { data, changeHandler, formHandler, formInputRegister }
};