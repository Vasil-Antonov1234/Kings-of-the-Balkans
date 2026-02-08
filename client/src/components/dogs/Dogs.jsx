import styles from "./Dogs.module.css";
import { Link } from "react-router";

export default function Dogs() {
    
    return (
        
        <section className={styles["section-wrapper"]}>
            {/* {isPending ? <h2 className={styles["loading"]}>Loading...</h2> : ""} */}
            <Link to="/dogs/males">
                <section className={styles["section-main"]}>
                    <span className={styles["select"]}>Males</span>
                    <img src="https://firebasestorage.googleapis.com/v0/b/kings-of-the-balkans-storage.firebasestorage.app/o/images%2FMale.avif?alt=media&token=1fd2fdfd-3cae-499a-a556-3d907488f96f" alt="male-image" className={styles["image"]} />
                </section>
            </Link>
            <Link to="/dogs/females">
                <section className={styles["section-main"]}>
                    <span className={styles["select"]}>Females</span>
                    <img src="https://firebasestorage.googleapis.com/v0/b/kings-of-the-balkans-storage.firebasestorage.app/o/images%2FFemale.jpg?alt=media&token=18fc305c-e8ef-46e3-aba1-a659dfe63791" alt="female-image" className={styles["image"]} />
                </section>
            </Link>
            <Link to="/dogs/puppies">
                <section className={styles["section-main"]}>
                    <span className={styles["select"]}>Puppies</span>
                    <img src="https://firebasestorage.googleapis.com/v0/b/kings-of-the-balkans-storage.firebasestorage.app/o/images%2FPuppies.jpg?alt=media&token=b48cd920-6139-4452-8d3a-f063f6b6995d" alt="puppies-image" className={styles["image-puppies"]} />
                </section>
            </Link>
        </section>
    );
}