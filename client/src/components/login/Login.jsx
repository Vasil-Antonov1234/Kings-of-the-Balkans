import styles from "./Login.module.css";
import useForm from "../../hooks/useForm.js";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";
// import { useParams, useNavigate } from "react-router";

const initialValues = {
    username: "",
    password: ""
}


export default function Login() {

    const { formHandler, formInputRegister, setData } = useForm(initialValues, onSubmit, "");
    const { loginHandler } = useContext(UserContext)

    async function onSubmit(userData) {

        loginHandler(userData);
        setData(initialValues);
    };



    return (
        <form action={formHandler} className={styles.login}>
            <section>
                <label htmlFor="username">User name</label>
                <input
                    {...formInputRegister("username")}
                    type="text"
                    id="username"
                />
                <label htmlFor="password">Password</label>
                <input
                    {...formInputRegister("password")}
                    type="password"
                    id="password"
                />
                <section className={styles["btn-wrapper"]}>
                    <div className={styles["btn-ctr"]}>
                        <button type="submit">Login</button>
                    </div>
                </section>
            </section>
        </form>
    )
}