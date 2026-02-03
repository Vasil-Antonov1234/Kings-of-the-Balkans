import styles from "./Dogs.module.css";
import { Link } from "react-router";

export default function Dogs() {
    
    return (
        
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