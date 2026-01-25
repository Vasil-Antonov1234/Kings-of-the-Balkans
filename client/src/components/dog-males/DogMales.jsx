import useFetch from "../../hooks/useFetch.js";
import DogCard from "../dog-card/DogCard.jsx";
import styles from "./DogMales.module.css"

export default function DogMales() {
    const { data, isPending } = useFetch("/dogs/males", []);

    return (
        <section className={styles["wrapper"]}>
            <section>
                <div className={styles["line"]}></div>
                <section className={styles["main-container"]}>
                    {isPending ? <h2 className={styles["loading"]}>Loading...</h2> :
                        data.length ? data.map((dog) => <DogCard key={dog._id} dog={dog} />) : <h2 className={styles["message"]}>We currently have no male dogs, please come back again.</h2>
                    }
                </section>
            </section>
            <div className={styles["line"]}></div>
        </section>
    );
}