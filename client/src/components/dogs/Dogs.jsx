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
        <section className={styles["section-wrapper"]}>
            <section className={styles["section-main"]}>
                <h2>Males</h2>
                <div className={styles["section-males"]}>
                    {dogs.map((dog) => <DogCard key={dog._id} dog={dog} />)}
                </div>
            </section>
            <section className={styles["section-main"]}>
                <h2>Females</h2>
                <div className={styles["section-females"]}>
                    {dogs.map((dog) => <DogCard key={dog._id} dog={dog} />)}
                </div>
            </section>
            <section className={styles["section-main"]}>
                <h2>Puppies</h2>
                <div className={styles["section-puppies"]}>
                    {dogs.map((dog) => <DogCard key={dog._id} dog={dog} />)}
                </div>
            </section>
        </section>
    );
}