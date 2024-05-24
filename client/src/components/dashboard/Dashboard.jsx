import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserInfo } from "../../services/UserService";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    getUserInfo(token)
      .then((res) => {
        console.log(res);
        setUserInfo(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="mx-auto py-10 max-w-6xl flex flex-col gap-10">
        <div className="w-full p-10 flex flex-col gap-5 shadow-[0_0_10px_5px_rgba(98,146,158,0.5)]">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold text-[#546A7B]">Details</h1>
            <h2 className="text-2xl font-bold text-yellow-500">Only visible to logged users</h2>
            <Link
              to="/dashboard/edit"
              className="w-48 px-8 py-2 text-center rounded-full text-md font-bold ease-in-out duration-500 bg-[#546A7B] hover:text-[#172326] hover:bg-[#62929E] text-[#FDFDFF]"
            >
              Edit Details
            </Link>
          </div>
          <div>
            <div className="w-fit grid grid-cols-2 gap-x-6">
              <p>Name:</p>
              <p>{userInfo?.name}</p>
              <p>Email:</p>
              <p>{userInfo?.email}</p>
              <p>Street Address:</p>
              <p>{userInfo?.streetAddress}</p>
              <p>City:</p>
              <p>{userInfo?.city}</p>
              <p>State:</p>
              <p>{userInfo?.state}</p>
              <p>Zip Code:</p>
              <p>{userInfo?.zipCode}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
