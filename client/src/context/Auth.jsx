import { createContext } from "react";

export const AuthContext = createContext();

const Auth = ({ children }) => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token ? true : false;
  };

  const isAdmin = () => {
    const role = localStorage.getItem("role");
    return role === "ADMIN";
  };

  const isUser = () => {
    const role = localStorage.getItem("role");
    return role === "USER";
  };

  const adminOnly = () => {
    return isAuthenticated() && isAdmin();
  };

  return (
    <AuthContext.Provider
      value={{ logout, isAuthenticated, isAdmin, isUser, adminOnly }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
