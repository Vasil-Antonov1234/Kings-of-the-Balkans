import { Link } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis est cupiditate qui dolorem. Nisi, error, eveniet maiores eligendi molestias incidunt facere explicabo cupiditate nemo obcaecati laudantium sapiente illum, reiciendis voluptas?</p>
            <div className={styles["address-wrapper"]}>
                <h5>Phone:</h5>
                <span>+359 123 456 789</span>
                <h5>Address:</h5>
                <span>San Francisco 49ers, Mcallister Street, California(CA)</span>
                <div className={styles["icon-wrapper"]}>
                    <Link>
                        <FontAwesomeIcon icon={faSquareFacebook} className={styles["icon"]} />
                    </Link>
                    <Link>
                        <FontAwesomeIcon icon={faEnvelope} className={styles["icon"]}/>
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
        </footer>
    )
}