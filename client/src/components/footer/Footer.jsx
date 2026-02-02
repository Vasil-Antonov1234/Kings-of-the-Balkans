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
                    <img src="../../../public/images/Logo.png" alt="logo" className={styles["logo"]} />
                    <img src="../../../public/images/FCI_logo.svg.png" alt="logo-FCI" className={styles["logo-fci"]} />
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
                        <Link>
                            <FontAwesomeIcon icon={faSquareFacebook} className={styles["icon"]} />
                        </Link>
                        <Link>
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