import styles from "./Dogs.module.css";
import { Link } from "react-router";

export default function Dogs() {
    
    return (
        
        <section className={styles["section-wrapper"]}>
            {/* {isPending ? <h2 className={styles["loading"]}>Loading...</h2> : ""} */}
            <Link to="/dogs/males">
                <section className={styles.sectionMain}>
                    <span className={styles["select"]}>Males</span>
                </section>
            </Link>
            <Link to="/dogs/females">
                <section className={`${styles.sectionMain} ${styles.females}`}>
                    <span className={styles["select"]}>Females</span>
                </section>
            </Link>
            <Link to="/dogs/puppies">
                <section className={`${styles.sectionMain} ${styles.puppies}`}>
                    <span className={styles["select"]}>Puppies</span>
                </section>
            </Link>
        </section>
    );
}
