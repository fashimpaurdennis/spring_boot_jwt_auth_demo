import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { login } from "../services/AuthService";

const Login = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleInput = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData)
      .then((res) => {
        console.log("Login Successful.");
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        navigate(from, { replace: true });
      })
      .catch(err => {
        if (!err?.response) {
          console.log("No response from server.");
        } else if (err.response?.status === 400) {
          console.log("Missing Username or Password.");
        } else if (err.response?.status === 401) {
          console.log("Unauthorized.");
        } else {
          console.log("Login Failed.");
        }
      });
  }

  return (
    <div>
      <>
      {/* show error messages */}
      </>
      <div className="w-fit mx-auto px-8 py-10 flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-800">Login</h1>
        <form className="grid grid-cols-3 gap-y-2 items-center" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input className="px-2 py-1 border-2 border-black col-span-2" onChange={handleInput} name="email" type="text" />
          <label htmlFor="password">Password</label>
          <input className="px-2 py-1 border-2 border-black col-span-2" onChange={handleInput} name="password" type="password" />
          <input className="px-4 py-2 rounded-full bg-slate-800 text-white font-bold hover:bg-slate-500 ease-in-out duration-500" type="submit" value="Login" />
        </form>
        <p>Not a member? <Link to="/register" className="font-bold text-sky-800 hover:text-sky-500">Register</Link></p>
      </div>
    </div>
  )
}

export default Login