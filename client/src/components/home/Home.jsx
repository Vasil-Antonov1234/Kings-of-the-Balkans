import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles["home-container"]}>
            <div className={styles["title-container"]}>
                <h1 className={styles.title}>Kings of the Balkans</h1>
            </div>
            <img src="../../public/images/stara-planina.webp" alt="background" className={styles["background"]} />
        </div>
    )
}