import { useContext } from "react";
import styles from "./Create.module.css"
import UserContext from "../../contexts/UserContext.jsx";
import useForm from "../../hooks/useForm.js";

const initialValues = {
    name: "",
    fullName: "",
    parents: "",
    dateOfBirth: "",
    imageUrl: "",
    gender: ""
};

export default function Create() {

    const { isAuthentcated } = useContext(UserContext);
    const { formHandler, formInputRegister } = useForm(initialValues, manageDogDataHandler)

    async function manageDogDataHandler(values) {
        console.log(values)
    }

    return (
        <section className={styles["main-ctr"]}>
            <h1>Create new record</h1>
            <form action={formHandler}>
                {/* Name */}
                <div>
                    <input
                        {...formInputRegister("name")}
                        type="text"
                        id="name"
                        placeholder="Name"
                    />
                </div>

                {/* Full name */}
                <div>
                    <input
                        {...formInputRegister("fullName")}
                        type="text"
                        id="fullName"
                        placeholder="Full name"
                    />
                </div>

                {/* Date of birth */}
                <div>
                    <input
                        {...formInputRegister("dateOfBirth")}
                        type="text"
                        id="dateOfBirth"
                        placeholder="Date of birth"
                    />
                </div>

                {/* Parents */}
                <div>
                    <input
                        {...formInputRegister("parents")}
                        type="text"
                        id="parents"
                        placeholder="Parents"
                    />
                </div>

                {/* Image Url */}
                <div>
                    <input
                        {...formInputRegister("imageUrl")}
                        type="text"
                        id="imageUrl"
                        placeholder="Image Url"
                    />
                </div>

                {/* Gender */}
                <div>
                    <input
                        {...formInputRegister("gender")}
                        type="text"
                        id="gender"
                        placeholder="Gender"
                    />
                </div>

                {/* Submit button */}
                <div className={styles["submit-btn-ctr"]}>
                    <button className={styles["submit-btn"]}>Create</button>
                </div>
            </form>
        </section>
    );
}