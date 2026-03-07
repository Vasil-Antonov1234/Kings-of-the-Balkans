import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState.js";
import useFetch from "../hooks/useFetch.js";

const UserContext = createContext({
    user: {
        username: "",
        password: "",
        accessToken: ""
    },
    loginHandler() {},
    logoutHandler() {},
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
            return alert("Username and password are required!");
        };

        try {
            const result = await request("/admin/login", "POST", userData);

            setUser(result);

            console.log(result);
        } catch (error) {
            alert(error.message);
        }
    }

    async function logoutHandler() {

        try {
            await request("/admin/logout", "GET", { accessToken: user?.accessToken });
        } catch (error) {
            alert(error.message);
        } finally {
            setUser(null);
        };
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