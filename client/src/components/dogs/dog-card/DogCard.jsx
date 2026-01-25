import { Link } from "react-router";
import styles from "./DogCard.module.css";

export default function DogCard({
    dog
}) {
    return (
        <Link className={styles["link"]}>
            <article className={styles["article"]}>
                <h3>{dog.name}</h3>
                <div className={styles["img-container"]}>
                    <img src={dog.imageUrl} alt="dog image" className={styles["image"]} />
                </div>
            </article>
            <span className={styles["details"]}>Details</span>
        </Link>
    );
}