import styles from "./Contacts.module.css"
import { Link } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"

export default function Contacts() {
    return (
        <section className={styles["main-ctr"]}>
            <form method="post">
                <section>
                    <fieldset>
                        <legend>Contact us</legend>
                        <section className={styles["inputs-ctr"]}>
                            <div>
                                <p><label htmlFor="fullName">Full name</label></p>
                                <input type="text" name="fullName" placeholder="John Doe" id="fullName" />
                            </div>
                            <div>
                                <p><label htmlFor="email">Email</label></p>
                                <input type="email" name="email" placeholder="example@gmail.com" id="email" />
                            </div>
                        </section>
                        <div>
                            <p><label htmlFor="message">Message</label></p>
                            <textarea name="message" placeholder="Your message here..." id="message"></textarea>
                        </div>
                        <section className={styles["btn-wrapper"]}>
                            <div className={styles["btn-ctr"]}>
                                <button type="button">Submit</button>
                            </div>
                            <div className={styles["btn-ctr"]}>
                                <button type="reset">Reset</button>
                            </div>
                        </section>
                    </fieldset>
                </section>
            </form>
            <Link to="https://www.facebook.com/?locale=bg_BG" target="_blank">
                <div className={styles["icon-wrapper"]}>
                    <FontAwesomeIcon icon={faSquareFacebook} className={styles["icon"]} />
                </div>
            </Link>
        </section>
    );
}