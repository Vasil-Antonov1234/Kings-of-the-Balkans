import styles from "./Login.module.css";
import useFetch from "../../hooks/useFetch.js";
import useForm from "../../hooks/useForm.js";
// import { useParams, useNavigate } from "react-router";

const initialValues = {
    username: "",
    password: ""
}


export default function Login() {

    const { formHandler, formInputRegister } = useForm(initialValues, onSubmitHandler, "");
    const { request } = useFetch()

    async function onSubmitHandler(userData) {
        const { username, password } = userData;

        if (!username || !password) {
            return alert("Username and password are required!");
        };

        try {
            const result = request("/admin/login", "POST", userData);


            console.log(result);
        } catch (error) {
            alert(error.message);
        }
    }



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