import { Link, NavLink } from "react-router";
import styles from "./Header.module.css";

export default function Header() {
    return (

        <header className={styles["header"]}>
            <Link to="/" className={styles["image-container"]}><img src="../../public/images/Logo.png" alt="logo" className={styles["logo"]} /></Link>

            <div className={styles["nav-container"]}>
                <nav className={styles["nav-bar"]}>
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles["selected"] : styles["link"]} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles["selected"] : styles["link"]} to="/dogs">Dogs</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles["selected"] : styles["link"]} to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={styles["small-nav-bar"]}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}