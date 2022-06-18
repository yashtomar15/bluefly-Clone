import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RequiredAuth = ({ children }) => {
  const { token } = useSelector((state) => state);
  console.log(token);
  if (token) return <>{children}</>;
  else {
    return <Navigate to="/login" />;
  }
};
