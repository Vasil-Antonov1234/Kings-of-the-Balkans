import styles from "./UploadPicture.module.css";
import { Link } from "react-router";

export default function Success() {
    return (
        <section className={styles["main-ctr"]}>
            <div className={styles["wrapper"]}>
                <h1 className={styles["success"]}>Seccessfully uploaded</h1>

                <Link to="/pictures/upload-picture">
                    <div className={styles["submit-btn-ctr"]}>
                        <span className={styles["submit-btn"]}>Upload more</span>
                    </div>
                </Link>
            </div>
        </section>
    );
}