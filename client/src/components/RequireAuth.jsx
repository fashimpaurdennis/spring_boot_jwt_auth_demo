import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import { useEffect } from "react";


const RequireAuth = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    isAuthenticated();
  }, [])

  return (
    isAuthenticated()
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default RequireAuth;