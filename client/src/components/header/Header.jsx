import { Link, NavLink } from "react-router";
import styles from "./Header.module.css";

export default function Header() {
    return (

        <header className={styles["header"]}>
            <Link to="/" className={styles["image-container"]}><img src="../../public/images/Logo.png" alt="logo" className={styles["logo"]} /></Link>

            <div className={styles["nav-container"]}>
                <nav className={styles["nav-bar"]}>
                    <NavLink className={({ isActive }) => isActive ? styles["selected"] : styles["link"]} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles["selected"] : styles["link"]} to="/dogs">Dogs</NavLink>
                </nav>
            </div>

        </header>
    );
}