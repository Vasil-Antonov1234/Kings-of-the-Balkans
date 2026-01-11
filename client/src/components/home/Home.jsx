import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles["home-container"]}>
            <div className={styles["title-container"]}>
                <h2 className={styles.title}>King of the Balkans</h2>
            </div>
            <img src="../../public/images/stara-planina.webp" alt="background" className={styles["background"]} />
        </div>
    )
}