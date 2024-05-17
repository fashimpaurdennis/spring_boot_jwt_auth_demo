import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Navbar = ({ isHome, isLogin }) => {
  const {isAuthenticated, logout} = useAuth();
  console.log(isAuthenticated());
  const location = useLocation();

  useEffect(() => {
    const userAuthStatus = isAuthenticated();
  },[location])

  const handleLogout = () => {
    logout();
  }

  return (
    <div className="sticky top-0">
      <nav className="bg-[#393D3F]">
        <div className="mx-auto w-full flex flex-wrap items-center justify-between px-8">
          <div className="flex w-full h-16 items-center justify-between">
            <div>
              <Link to="/" className="text-3xl text-[#FDFDFF] font-bold">
                GalleryGavel
              </Link>
            </div>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex gap-x-4">
                {isAuthenticated() && <Link to="/dashboard" onClick={handleLogout} className="px-8 py-2 rounded-full text-md font-bold ease-in-out duration-500 bg-[#546A7B] text-[#172326] hover:bg-[#62929E] hover:text-[#FDFDFF]">Account</Link>}
                {isAuthenticated()
                  ? <Link to="/" onClick={handleLogout} className="px-8 py-2 rounded-full text-md font-bold ease-in-out duration-500 bg-[#546A7B] text-[#172326] hover:bg-[#62929E] hover:text-[#FDFDFF]">Logout</Link>
                  : <Link to="/login" className="px-8 py-2 rounded-full text-md font-bold ease-in-out duration-500 bg-[#546A7B] text-[#172326] hover:bg-[#62929E] hover:text-[#FDFDFF]">Login</Link>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

