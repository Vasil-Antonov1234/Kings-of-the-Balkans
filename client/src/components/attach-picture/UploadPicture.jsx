import styles from "./UploadPicture.module.css"

export default function UploadPicture() {
    return (
        <section className={styles["main-ctr"]}>
            <h1>Upload picture</h1>
            <form>
                {/* Name */}
                <div className={styles["name-ctr"]}>
                    <input type="text" placeholder="Name" name="name" />
                </div>

                {/* Picture url */}
                <div className={styles["url-ctr"]}>
                    <input type="text" placeholder="url" name="pictureUrl" />
                </div>
                
                {/* Submit button */}
                <div className={styles["submit-btn-ctr"]}>
                    <button className={styles["submit-btn"]}>Upload</button>
                </div>
            </form>
        </section>
    );
}