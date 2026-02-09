import styles from "./Home.module.css";
import { Link } from "react-router"

export default function Home() {
    return (
        <div className={styles["home-container"]}>
            <div className={styles["title-container"]}>
                <h1 className={styles.title}>Kings of the Balkans</h1>
                <p className={styles["sub-text"]}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et delectus qui omnis iste, incidunt iusto?</p>
            </div>
            <section className={styles["images-container"]}>
                <Link className={`${styles.wrapper} ${styles.ourDogs}`} to="/dogs">
                    <span>OUR DOGS</span>
                </Link>
                <Link className={`${styles.wrapper} ${styles.story}`} to="/story">
                    <span>STORY</span>
                </Link>
                <Link className={`${styles.wrapper} ${styles.contacts}`} to="/contacts">
                    <span>CONTACTS</span>
                </Link>
            </section>
        </div>
    )
}