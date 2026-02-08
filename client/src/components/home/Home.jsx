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
                <Link className={styles["wrapper"]} to="/dogs">
                    <img src="https://media.istockphoto.com/id/901452286/photo/three-doberman-pincher-relaxing-in-the-park.jpg?s=612x612&w=0&k=20&c=82UiXd_KuHtCSg_WgxT-jolgzNn_8FstJ97-GMQ4dQE=" alt="image-dog-one" />
                    <span>OUR DOGS</span>
                </Link>
                <Link className={styles["wrapper"]} to="/story">
                    <img src="https://www.shutterstock.com/image-photo/three-doberman-runaway-camera-back-260nw-2497401555.jpg" alt="image-dog-one" />
                    <span>STORY</span>
                </Link>
                <Link className={styles["wrapper"]} to="/contacts">
                    <img src="https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg" alt="image-dog-one" />
                    <span>CONTACTS</span>
                </Link>
            </section>
        </div>
    )
}