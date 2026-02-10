import { Link, NavLink } from "react-router";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
    const [smallMenuOpen, setSmalMenuOpen] = useState(false);

    function openMenuHandler() {
        setSmalMenuOpen(!smallMenuOpen)
    }

    return (
        <header className={styles["header"]}>

            <Link to="/" className={styles["image-container"]}>
                <img src="https://firebasestorage.googleapis.com/v0/b/kings-of-the-balkans-storage.firebasestorage.app/o/images%2FLogo.png?alt=media&token=f2c8a018-89c0-464f-ba70-553b2189a44c" alt="logo" className={styles["logo"]} />
            </Link>

            <div className={styles["nav-container"]}>
                <nav className={smallMenuOpen ? styles["open"] : ""}>
                    <div className={styles["nav-bar"]}>
                        <ul>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles["selected"] : styles["link"]} to="/" onClick={openMenuHandler}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles["selected"] : styles["link"]} to="/story" onClick={openMenuHandler}>Story</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles["selected"] : styles["link"]} to="/dogs" onClick={openMenuHandler}>Dogs</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles["selected"] : styles["link"]} to="/contacts" onClick={openMenuHandler}>Contacts</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles["selected"] : styles["link"]} to="/about" onClick={openMenuHandler}>About</NavLink>
                            </li>
                            {/* <li>
                                <NavLink className={({ isActive }) => isActive ? styles["selected"] : styles["link"]} to="/pictures/upload-picture">Upload picture</NavLink>
                            </li> */}
                        </ul>
                    </div>
                </nav>
                <span className={smallMenuOpen ? styles["x-mark"] : styles["close"]} onClick={openMenuHandler}>X</span>
                <div className={smallMenuOpen ? styles["close"] : styles["small-nav-bar"]} onClick={openMenuHandler}>
                    <span className={smallMenuOpen ? styles["close"] : ""}></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}