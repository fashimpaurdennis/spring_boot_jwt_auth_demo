import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../services/ItemService";


const ItemForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    create(formData, localStorage.getItem('token'))
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-10 flex flex-col gap-5 shadow-[0_0_10px_5px_rgba(98,146,158,0.5)]">
      <h1 className="text-4xl font-bold text-[#546A7B]">Edit Details</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input onChange={handleInput} placeholder="Name" type="text" name="name" className="px-4 py-2 rounded-full outline outline-4 outline-[#546A7B]" />
        <textarea onChange={handleInput} placeholder="Description" name="description" className="px-4 py-2 rounded-2xl outline outline-4 outline-[#546A7B]" />
        <div>
          <button type="submit" className="px-8 py-2 text-center rounded-full text-md font-bold ease-in-out duration-500 bg-[#546A7B] hover:text-[#172326] hover:bg-[#62929E] text-[#FDFDFF]">Register</button>
        </div>
      </form>
    </div>
  )
}

export default ItemForm