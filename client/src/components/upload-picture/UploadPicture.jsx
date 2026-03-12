import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import styles from "./UploadPicture.module.css";
import { useNavigate } from "react-router";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase.js";
import UserContext from "../../contexts/UserContext.jsx";

export default function UploadPicture() {

    const navigate = useNavigate();
    const { request } = useFetch()
    const [imagePreview, setImagePreview] = useState(null);

    const { user, logoutHandler } = useContext(UserContext);

    async function uploadPictureHandler(event) {
       
        const accessToken = user.token;

        event.preventDefault();
        const formData = new FormData(event.target);

        const { pictureUrl, ...data } = Object.fromEntries(formData);
        // const { ...data } = Object.fromEntries(formData);

        if (!data.pictureName) {
            return alert("Picture name is required!")
        }

        if (!imagePreview) {
            return alert("Picture for upload is required!")
        }

        const imageRef = ref(storage, `images/${pictureUrl.name}`);

        try {
            await uploadBytes(imageRef, pictureUrl);
            data.pictureUrl = await getDownloadURL(imageRef);

            await request(`/pictures/upload`, "POST", data, { accessToken });

            navigate("/pictures/uploaded-success");
        } catch (error) {
            logoutHandler();
            alert(error.message);
        };
    }

    function imageChangeHandler(event) {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl);
    }

    return (
        <section className={styles["main-ctr"]}>
            <div className={styles["wrapper"]}>
                <h1>Upload picture</h1>
                <form onSubmit={uploadPictureHandler}>
                    {/* Name */}
                    <div className={styles["name-ctr"]}>
                        <input
                            name="pictureName"
                            type="text"
                            placeholder="Picture name..."
                        />
                    </div>

                    {/* Picture url */}
                    {/* <div className={styles["url-ctr"]}>
                        <input
                            {...formInputRegister("pictureUrl")}
                            type="text"
                            placeholder="Picture url..."
                        />
                    </div> */}

                    {/* Add button */}
                    <label htmlFor="image" className={styles["label"]}>Add picture</label>
                    <input
                        name="pictureUrl"
                        type="file"
                        placeholder="Add picture..."
                        id="image"
                        className={styles["add-picture"]}
                        onChange={imageChangeHandler}
                    />

                    {imagePreview && (
                        <img src={imagePreview} alt="image" className={styles["image-preview"]} />
                    )}

                    {/* Upload button */}
                    <div className={styles["submit-btn-ctr"]}>
                        <button className={styles["submit-btn"]}>Upload</button>
                    </div>
                </form>
            </div>
        </section>
    );
}