import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import { Navigate } from "react-router";

export default function IsAuthenticated() {
    const { isAuthentcated } = useContext(UserContext)

    if (isAuthentcated) {
        return <Navigate to="/" />
    }

    return <Outlet />;
};