import { Navigate } from "react-router";
import Loading from "../components/Loading/Loading";
import useUserRole from "../hooks/useUserRole";

const HR_PrivitePage = ({ children }) => {
  const { userInfo, isLoading } = useUserRole();

  if (isLoading) return <Loading />;

  if (userInfo.role === "admin") {
    return children;
  }

  return <Navigate to={'/'} />
};

export default HR_PrivitePage;
