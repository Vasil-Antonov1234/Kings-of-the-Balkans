import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState.js";
import useFetch from "../hooks/useFetch.js";
import { toast } from "react-toastify"

const UserContext = createContext({
    user: {
        username: "",
        password: "",
        token: ""
    },
    loginHandler() { },
    logoutHandler() { },
    isAuthentcated: false
})

export function UserProvider({
    children
}) {
    const [user, setUser] = usePersistedState(null, "auth");
    const { request } = useFetch();

    async function loginHandler(userData) {
        const { username, password } = userData;

        if (!username || !password) {
            
            return toast.warning("Username and password are required!");
        };

        try {
            const result = await request("/admin/login", "POST", userData);

            if (!result) {
                return
            }

            setUser(result);

        } catch (error) {
            toast.error(error.message)
        }
    }

    async function logoutHandler() {

        // try {
        //     await request("/admin/logout", "GET", { accessToken: user?.accessToken });
        // } catch (error) {
        //     alert(error.message);
        // } finally {
        //     setUser(null);
        //     localStorage.removeItem("auth");
        // };

        setUser(null);
        localStorage.removeItem("auth");
    }

    const userContextValues = {
        user,
        loginHandler,
        logoutHandler,
        isAuthentcated: !!user
    }

    return <UserContext.Provider value={userContextValues} >
        {children}
    </UserContext.Provider>
}

export default UserContext;