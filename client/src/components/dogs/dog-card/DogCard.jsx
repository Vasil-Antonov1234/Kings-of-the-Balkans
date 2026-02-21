import { Link } from "react-router";
import styles from "./DogCard.module.css";

export default function DogCard({
    dog
}) {
    return (
        <article to={`/dogs/${dog._id}/details`} className={styles["wrapper"]}>
            <article className={styles["article"]}>
                <h3>{dog.name}</h3>
                <div className={styles["img-container"]}>
                    <img src={dog.imageUrl} alt="dog image" className={styles["image"]} />
                </div>
            </article>
            <Link to={`/dogs/${dog._id}/details`}>
                <span className={styles["details"]}>Show more</span>
            </Link>
        </article>
    );
}