import { useContext } from "react"
import UserContext from "../../contexts/UserContext.jsx"
import { Navigate } from "react-router";

export default function Logout() {
    const { logoutHandler } = useContext(UserContext);

    logoutHandler();
    
    return <Navigate to={"/"}></Navigate>
}