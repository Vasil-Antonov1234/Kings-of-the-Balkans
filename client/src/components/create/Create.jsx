import { useContext } from "react";
import styles from "./Create.module.css"
import UserContext from "../../contexts/UserContext.jsx";
import useForm from "../../hooks/useForm.js";
import useFetch from "../../hooks/useFetch.js";
import { useNavigate, useParams } from "react-router";

const initialValues = {
    name: "",
    fullName: "",
    parents: "",
    dateOfBirth: "",
    imageUrl: "",
    gender: ""
};

export default function Create() {
    const { dogId } = useParams();

    const { isAuthentcated, user } = useContext(UserContext);
    const { formHandler, formInputRegister } = useForm(initialValues, manageDogDataHandler, dogId)

    const { request } = useFetch()
    const navigate = useNavigate();

    async function manageDogDataHandler(values, dogId) {

        if(!isAuthentcated) {
            navigate("/admin/login");
        };
        
        if(!values.name) {
            return alert("Name is required!")
        }

        if(!values.fullName) {
            return alert("Full name is required!")
        }

        if(!values.dateOfBirth) {
            return alert("Date of birth is required!")
        }

        if(!values.parents) {
            return alert("Parents is required!")
        }

        if(!values.imageUrl) {
            return alert("Image Url is required!")
        }

        if(!values.gender) {
            return alert("Gender is required!")
        }

        if(dogId) {
            try {
                await request(`/dogs/${dogId}/edit`, "POST", values, {accessToken: user.token});
                navigate(`/dogs/${dogId}/details`)
            } catch (error) {
                alert(error);
            };
        } else {
            try {
                await request("/dogs/create", "POST", values, {accessToken: user.token})
                navigate("/dogs");
            } catch (error) {
                alert(error);
            };
        };
    }

    return (
        <section className={styles["main-ctr"]}>
            <h1 className={styles.title}>{dogId ? `Edit` : "Create new record"}</h1>
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
                    <button className={styles["submit-btn"]}>{ dogId ? "Edit" : "Create" }</button>
                </div>
            </form>
        </section>
    );
}