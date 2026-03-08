import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import { Navigate, Outlet } from "react-router";

export default function IsAuthenticated() {
    const { isAuthentcated } = useContext(UserContext);

    if (!isAuthentcated) {
        return <Navigate to="admin/login" />
    }
    
    return <Outlet />
}