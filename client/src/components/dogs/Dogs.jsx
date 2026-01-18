import DogCard from "../dog-card/DogCard.jsx";
import styles from "./Dogs.module.css";
import useFetch from "../../hooks/useFetch.js";

export default function Dogs() {
    const { data, isPending } = useFetch("/data/dogs", [])

    const dogs = data;
    
    const males = dogs.filter((dog) => dog.gender === "Male");
    const females = dogs.filter((dog) => dog.gender === "Female");
    const puppies = dogs.filter((dog) => dog.gender === "Puppy");

    return (
        <section className={styles["section-wrapper"]}>
            {isPending ? <h2 className={styles["loading"]}>Loading...</h2> : ""}
            <section className={styles["section-main"]}>
                <h2>Males</h2>
                <div className={styles["section-males"]}>
                    {males.length > 0 ? males.map((dog) => <DogCard key={dog._id} dog={dog} />) : <p className={styles["message"]}>We currently have no male dogs, please come back again.</p>}
                </div>
            </section>
            <section className={styles["section-main"]}>
                <h2>Females</h2>
                <div className={styles["section-females"]}>
                    {females.length > 0 ? females.map((dog) => <DogCard key={dog._id} dog={dog} />) : <p className={styles["message"]}>We currently have no female dogs, please come back again.</p>}
                </div>
            </section>
            <section className={styles["section-main"]}>
                <h2>Puppies</h2>
                <div className={styles["section-puppies"]}>
                    {puppies.length > 0 ? puppies.map((dog) => <DogCard key={dog._id} dog={dog} />) : <p className={styles["message"]}>We currently have no puppies, please come back again.</p>}
                </div>
            </section>
        </section>
    );
}