import { Link } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer>
            <section className={styles["text-logo-container"]}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis est cupiditate qui dolorem. Nisi, error, eveniet maiores eligendi molestias incidunt facere explicabo cupiditate nemo obcaecati laudantium sapiente illum, reiciendis voluptas?</p>
                <div className={styles["logo-wrapper"]}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/kings-of-the-balkans-storage.firebasestorage.app/o/images%2FLogo.png?alt=media&token=f2c8a018-89c0-464f-ba70-553b2189a44c" alt="logo" className={styles["logo"]} />
                    <img src="https://firebasestorage.googleapis.com/v0/b/kings-of-the-balkans-storage.firebasestorage.app/o/images%2FFCI_logo.svg.png?alt=media&token=9d278836-4358-4492-a7c9-be667fa82a2d" className={styles["logo-fci"]} />
                </div>
            </section>
            <section className={styles["address-nav-container"]}>
                <div className={styles["address-wrapper"]}>
                    <div className={styles["phone"]}>
                        <h5>Phone:</h5>
                        <span>+359 123 456 789</span>
                    </div>
                    <div className={styles["street"]}>
                        <h5>Address:</h5>
                        <Link to="https://www.google.com/maps/search/San+Francisco+49ers,+Mcallister+Street/@37.7779926,-122.4354512,19.75z?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" target="_blank">
                            <span>San Francisco 49ers, Mcallister Street, California(CA)</span>
                        </Link>
                    </div>
                    <div className={styles["icon-wrapper"]}>
                        <Link to="https://www.facebook.com/?locale=bg_BG" target="_blank">
                            <FontAwesomeIcon icon={faSquareFacebook} className={styles["icon"]} />
                        </Link>
                        <Link to="/contacts">
                            <FontAwesomeIcon icon={faEnvelope} className={styles["icon"]} />
                        </Link>
                    </div>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/story">Story</Link>
                    </li>
                    <li>
                        <Link to="/dogs">Dogs</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </section>
        </footer>
    )
}