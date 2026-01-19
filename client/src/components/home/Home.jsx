import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles["home-container"]}>
            <div className={styles["title-container"]}>
                <h1 className={styles.title}>Kings of the Balkans</h1>
                <p className={styles["sub-text"]}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et delectus qui omnis iste, incidunt iusto?</p>
                <section className={styles["images-container"]}>
                    <img src="https://www.akc.org/wp-content/uploads/2017/11/Doberman-Pinscher-standing-outdoors.jpg" alt="image-dog-one" />
                    <img src="https://www.akc.org/wp-content/uploads/2017/11/Doberman-Pinscher-standing-outdoors.jpg" alt="image-dog-one" />
                    <img src="https://www.akc.org/wp-content/uploads/2017/11/Doberman-Pinscher-standing-outdoors.jpg" alt="image-dog-one" />
                </section>
            </div>
        </div>
    )
}