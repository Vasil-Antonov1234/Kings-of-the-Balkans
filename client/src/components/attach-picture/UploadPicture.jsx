import styles from "./UploadPicture.module.css"

export default function UploadPicture() {
    return (
        <section className={styles["main-ctr"]}>
            <div className={styles["wrapper"]}>
                <h1>Upload picture</h1>
                <div className={styles["image-ctr"]}>
                    <img src="https://www.akc.org/wp-content/uploads/2017/11/Doberman-Pinscher-standing-outdoors.jpg" alt="image" />
                </div>
                <form>
                    {/* Name */}
                    <div className={styles["name-ctr"]}>
                        <input
                            type="text"
                            placeholder="Name"
                            name="pictureName" />
                    </div>

                    {/* Picture url */}
                    <div className={styles["url-ctr"]}>
                        <input
                            type="text"
                            placeholder="url"
                            name="pictureUrl" />
                    </div>

                    {/* Pictures selection */}
                    <div className={styles["pictures-selection-wrapper"]}>
                        <select name="pictures" id="pictures">
                            <option value="test">test</option>
                        </select>
                    </div>

                    {/* Submit button */}
                    <div className={styles["submit-btn-ctr"]}>
                        <button className={styles["submit-btn"]}>Upload</button>
                    </div>
                </form>
            </div>
        </section>
    );
}