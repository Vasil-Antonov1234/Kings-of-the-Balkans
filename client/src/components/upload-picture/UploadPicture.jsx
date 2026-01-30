import useFetch from "../../hooks/useFetch.js";
import useForm from "../../hooks/useForm.js";
import styles from "./UploadPicture.module.css";
import { useNavigate } from "react-router";

const initialValues = {
    pictureName: "",
    pictureUrl: ""
}

export default function UploadPicture() {

    const navigate = useNavigate();

    const { formHandler, formInputRegister } = useForm(initialValues, managePictureInputHandler);
    const { request } = useFetch();

    async function managePictureInputHandler(values) {

        if (!values.pictureName) {
            return alert("Picture name is required!");
        };

        if (!values.pictureUrl) {
            return alert("Picture url is required!");
        };

        try {
            await request(`/pictures/upload`, "POST", values);

            navigate("/pictures/uploaded-success");
        } catch (error) {
            alert(error);
        }

    }

    return (
        <section className={styles["main-ctr"]}>
            <div className={styles["wrapper"]}>
                <h1>Upload picture</h1>
                <form action={formHandler}>
                    {/* Name */}
                    <div className={styles["name-ctr"]}>
                        <input
                            {...formInputRegister("pictureName")}
                            type="text"
                            placeholder="Picture name..."
                        />
                    </div>

                    {/* Picture url */}
                    <div className={styles["url-ctr"]}>
                        <input
                            {...formInputRegister("pictureUrl")}
                            type="text"
                            placeholder="Picture url..."
                        />
                    </div>

                    {/* Add button */}
                    <label htmlFor="image" className={styles["label"]}>Add picture</label>
                    <input
                        {...formInputRegister("pictureUrl")}
                        type="file"
                        placeholder="Add picture..."
                        id="image"
                        className={styles["add-picture"]}
                    />

                    {/* Upload button */}
                    <div className={styles["submit-btn-ctr"]}>
                        <button className={styles["submit-btn"]}>Upload</button>
                    </div>
                </form>
            </div>
        </section>
    );
}