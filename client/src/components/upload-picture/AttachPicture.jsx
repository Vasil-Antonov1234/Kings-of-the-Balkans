import { useContext } from "react";
import useFetch from "../../hooks/useFetch.js";
import useForm from "../../hooks/useForm.js";
import styles from "./UploadPicture.module.css"
import { useParams, useNavigate } from "react-router"
import UserContext from "../../contexts/UserContext.jsx";
import { toast } from "react-toastify";

const initialValues = {
    picture: ""
}

export default function AttachPicture() {

    const { dogId } = useParams();

    const { user } = useContext(UserContext);
    const accessToken = user.token;

    const { formHandler, formInputRegister } = useForm(initialValues, managePictureInputHandler);

    const navigate = useNavigate();

    const { request, data: dog } = useFetch(`/dogs/${dogId}/details`);
    const { data: pictures } = useFetch("/pictures");

    async function managePictureInputHandler(values) {

        if (!values.picture) {
            return toast.warning("Picture to attach is required!");
        };

        try {
            await request(`/pictures/${dogId}/upload-picture`, "POST", values, { accessToken });

            navigate(`/dogs/${dogId}/details`);
        } catch (error) {
            toast.error(error);
        };

    }

    return (
        <section className={styles["main-ctr"]}>
            <div className={styles["wrapper"]}>
                <h1>Attach picture</h1>
                <h2>{dog?.name}</h2>
                <div className={styles["image-ctr"]}>
                    <img src={dog?.imageUrl} alt="image" />
                </div>

                <form action={formHandler}>

                    {/* Pictures selection */}
                    <div className={styles["pictures-selection-wrapper"]}>
                        <select
                            {...formInputRegister("picture")}
                            id="pictures"
                        >
                            <option value="none" selected>-----</option>
                            {pictures?.map((x) => <option value={x._id}>{x.pictureName}</option>)}
                        </select>
                    </div>

                    {/* Attach button */}
                    <div className={styles["submit-btn-ctr"]}>
                        <button className={styles["submit-btn"]}>Attach</button>
                    </div>
                </form>
            </div>
        </section>
    );
}