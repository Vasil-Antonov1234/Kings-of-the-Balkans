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
                <Link className={styles.wrapper} to="/dogs">
                    <div className={styles.line}></div>
                    <div className={`${styles["img-container"]} ${styles.ourDogs}`}>
                        <span>OUR DOGS</span>
                    </div>
                </Link>
                <Link className={styles.wrapper} to="/story">
                    <div className={styles.line}></div>
                    <div className={`${styles["img-container"]} ${styles.story}`}>
                        <span>STORY</span>
                    </div>
                </Link>
                <Link className={styles.wrapper} to="/contacts">
                    <div className={styles.line}></div>
                    <div className={`${styles["img-container"]} ${styles.contacts}`}>
                        <span>CONTACTS</span>
                    </div>
                </Link>
            </section>
        </div>
    )
}