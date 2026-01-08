import { useEffect, useState } from "react";
import DogCard from "../dog-card/DogCard.jsx";
import styles from "./Dogs.module.css";

export default function Dogs() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {

        (async () => {

            try {
                const response = await fetch("http://localhost:5000/data/dogs");
                const result = await response.json();

                setDogs(result);
            } catch (error) {
                alert(error.message);
            };

        })();
    });
    
    return (
        <section className={styles["section"]}>
            {dogs.map((dog) => <DogCard key={dog._id} dog={dog} />)}
        </section>
    );
}