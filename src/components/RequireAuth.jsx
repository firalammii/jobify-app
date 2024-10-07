import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { sessionStorageKey } from "../data/roles";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    const user = auth || JSON.parse(sessionStorage.getItem(sessionStorageKey));

    console.log(user);
    return (
        user?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : user?.accessToken
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/sign-in" state={{ from: location }} replace />
    );
};

export default RequireAuth;