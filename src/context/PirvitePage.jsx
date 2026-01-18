import { use } from "react";
import { AuthContext } from "./AuthContext";
import Loading from "../components/Loading/Loading";
import { Navigate, useLocation } from "react-router";

const PrivitePage = ({children}) => {

    const {user, loading} = use(AuthContext);
    const location = useLocation();

    if(loading) return <Loading />

    if(user) {
        return children;
    }

    return <Navigate to={'/login'} state={location.pathname} />
    
}

export default PrivitePage;