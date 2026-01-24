import styles from "./Dogs.module.css";
import { Link } from "react-router";

export default function Dogs() {
    // const { data, isPending } = useFetch("/data/dogs", [])

    // const dogs = data;

    // const males = dogs.filter((dog) => dog.gender === "Male");   
    // const females = dogs.filter((dog) => dog.gender === "Female");
    // const puppies = dogs.filter((dog) => dog.gender === "Puppy");

    return (
        // <section className={styles["section-wrapper"]}>
        //     {isPending ? <h2 className={styles["loading"]}>Loading...</h2> : ""}
        //     <section className={styles["section-main"]}>
        //         <h2>Males</h2>
        //         <div className={styles["section-males"]}>
        //             {males.length > 0 ? males.map((dog) => <DogCard key={dog._id} dog={dog} />) : <p className={styles["message"]}>We currently have no male dogs, please come back again.</p>}
        //         </div>
        //     </section>
        //     <section className={styles["section-main"]}>
        //         <h2>Females</h2>
        //         <div className={styles["section-females"]}>
        //             {females.length > 0 ? females.map((dog) => <DogCard key={dog._id} dog={dog} />) : <p className={styles["message"]}>We currently have no female dogs, please come back again.</p>}
        //         </div>
        //     </section>
        //     <section className={styles["section-main"]}>
        //         <h2>Puppies</h2>
        //         <div className={styles["section-puppies"]}>
        //             {puppies.length > 0 ? puppies.map((dog) => <DogCard key={dog._id} dog={dog} />) : <p className={styles["message"]}>We currently have no puppies, please come back again.</p>}
        //         </div>
        //     </section>
        // </section>

        <section className={styles["section-wrapper"]}>
            {/* {isPending ? <h2 className={styles["loading"]}>Loading...</h2> : ""} */}
            <Link to="/dogs/males">
                <section className={styles["section-main"]}>
                    <span className={styles["select"]}>Males</span>
                    <img src="../../../public/images/Male.avif" alt="male-image" className={styles["image"]} />
                </section>
            </Link>
            <Link to="/dogs/females">
                <section className={styles["section-main"]}>
                    <span className={styles["select"]}>Females</span>
                    <img src="../../../public/images/Female.jpg" alt="female-image" className={styles["image"]} />
                </section>
            </Link>
            <Link to="/dogs/puppies">
                <section className={styles["section-main"]}>
                    <span className={styles["select"]}>Puppies</span>
                    <img src="../../../public/images/Puppies.jpg" alt="puppies-image" className={styles["image-puppies"]} />
                </section>
            </Link>
        </section>
    );
}