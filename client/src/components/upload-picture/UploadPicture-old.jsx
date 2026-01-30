import useFetch from "../../hooks/useFetch.js";
import useForm from "../../hooks/useForm.js";
import styles from "./UploadPicture.module.css"
import { useParams } from "react-router"

const initialValues = {
    pictureName: "",
    pictureUrl: "",
    picture: ""
}

export default function UploadPictureOld() {

    const { dogId } = useParams();

    const { formHandler, formInputRegister } = useForm(initialValues, managePictureInputHandler);

    const { request, data: dog } = useFetch(`/dogs/${dogId}/details`);
    const { data: pictures } = useFetch("/pictures");

    async function managePictureInputHandler(values) {

        if (!dogId && !values.pictureName) {
            return alert("Picture name is required!");
        };

        if (!dogId && !values.pictureUrl) {
            return alert("Picture url is required!");
        };

        if (dogId && !values.picture) {
            return alert("Picture to attach is required!")
        }

        if (!dogId) {

            try {
                await request(`/pictures/upload`, "POST", values);
            } catch (error) {
                alert(error)
            }
        } else {

            try {
                await request(`/pictures/${dogId}/upload-picture`, "POST", values)
            } catch (error) {
                alert(error);
            };

        }
    }

    return (
        <section className={styles["main-ctr"]}>
            <div className={styles["wrapper"]}>
                <h1>{dogId ? "Attach picture" : "Upload picture"}</h1>
                {dogId ?
                    <>
                        <h2>{dog?.name}</h2>
                        <div className={styles["image-ctr"]}>
                            <img src={dog?.imageUrl} alt="image" />
                        </div>
                    </> : ""
                }
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
                    {dogId ?
                        <div className={styles["pictures-selection-wrapper"]}>
                            <select
                                {...formInputRegister("picture")}
                                id="pictures"
                            >
                                <option value="none" selected>-----</option>
                                {pictures?.map((x) => <option value={x._id}>{x.pictureName}</option>)}
                            </select>
                        </div> : ""
                    }

                    {/* Submit button */}
                    <div className={styles["submit-btn-ctr"]}>
                        <button className={styles["submit-btn"]}>{dogId ? "Attach" : "Upload"}</button>
                    </div>
                </form>
            </div>
        </section>
    );
}