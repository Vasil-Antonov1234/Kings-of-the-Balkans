import useFetch from "../../hooks/useFetch.js";
import useForm from "../../hooks/useForm.js";
import styles from "./UploadPicture.module.css"
import { useParams } from "react-router"

const initialValues = {
    pictureName: "",
    pictureUrl: ""
}

export default function UploadPicture() {

    const { dogId } = useParams();

    const { formHandler, formInputRegister } = useForm(initialValues, managePictureInputHandler);

    const { request } = useFetch();

    async function managePictureInputHandler(values) {

        if (!values.pictureName) {
            return alert("Picture name is required!");
        };

        if (!values.pictureUrl) {
            return alert("Picture url is required!");
        };

        if (!dogId) {

            try {
                await request(`/pictures/upload`, "POST", values);
            } catch (error) {
                alert(error)
            }

        }
    }

    return (
        <section className={styles["main-ctr"]}>
            <div className={styles["wrapper"]}>
                <h1>Upload picture</h1>
                {/* <div className={styles["image-ctr"]}>
                    <h2>Name</h2>
                    <img src="https://www.akc.org/wp-content/uploads/2017/11/Doberman-Pinscher-standing-outdoors.jpg" alt="image" />
                </div> */}
                <form action={formHandler}>
                    {/* Name */}
                    <div className={styles["name-ctr"]}>
                        <input
                            {...formInputRegister("pictureName")}
                            type="text"
                            placeholder="Picture name"
                        />
                    </div>

                    {/* Picture url */}
                    <div className={styles["url-ctr"]}>
                        <input
                            {...formInputRegister("pictureUrl")}
                            type="text"
                            placeholder="Picture url"
                        />
                    </div>

                    {/* Pictures selection */}
                    {/* <div className={styles["pictures-selection-wrapper"]}>
                        <select name="pictures" id="pictures">
                            <option value="test">test</option>
                        </select>
                    </div> */}

                    {/* Submit button */}
                    <div className={styles["submit-btn-ctr"]}>
                        <button className={styles["submit-btn"]}>Upload</button>
                    </div>
                </form>
            </div>
        </section>
    );
}