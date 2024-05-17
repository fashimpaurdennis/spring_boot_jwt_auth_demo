import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/AuthService";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    password: "",
    confirm: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    register(formData)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="mx-auto py-10 w-fit flex flex-col gap-5">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2">
          <label htmlFor="name">Name:</label>
          <input
            onChange={handleInput}
            className="col-span-2 border border-black"
            type="text"
            name="name"
          />
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleInput}
            className="col-span-2 border border-black"
            type="text"
            name="email"
          />
          <label htmlFor="streetAddress">Street Address:</label>
          <input
            onChange={handleInput}
            className="col-span-2 border border-black"
            type="text"
            name="streetAddress"
          />
          <label htmlFor="city">City:</label>
          <input
            onChange={handleInput}
            className="col-span-2 border border-black"
            type="text"
            name="city"
          />
          <label htmlFor="state">State:</label>
          <input
            onChange={handleInput}
            className="col-span-2 border border-black"
            type="text"
            name="state"
          />
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            onChange={handleInput}
            className="col-span-2 border border-black"
            type="text"
            name="zipCode"
          />
          <label htmlFor="password">Password:</label>
          <input
            onChange={handleInput}
            className="col-span-2 border border-black"
            type="password"
            name="password"
          />
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            onChange={handleInput}
            className="col-span-2 border border-black"
            type="password"
            name="confirm"
          />
          <label htmlFor="role">Role:</label>
          <input
            onChange={handleInput}
            className="col-span-2 border border-black"
            type="text"
            name="role"
          />
          <input
            className="px-4 py-2 bg-gray-600 text-white rounded-full"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
