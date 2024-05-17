import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="mx-auto py-10 max-w-6xl flex flex-col gap-10">
        <div className="w-full p-10 flex flex-col gap-5 shadow-[0_0_10px_5px_rgba(98,146,158,0.5)]">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold text-[#546A7B]">Details</h1>
            <Link to="/dashboard/edit" className="w-48 px-8 py-2 text-center rounded-full text-md font-bold ease-in-out duration-500 bg-[#546A7B] hover:text-[#172326] hover:bg-[#62929E] text-[#FDFDFF]">Edit Details</Link>
          </div>
        </div>
        <div className="w-full p-10 flex flex-col gap-5 shadow-[0_0_10px_5px_rgba(98,146,158,0.5)]">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold text-[#546A7B]">Inventory</h1>
            <Link to="/items/new" className="w-48 px-8 py-2 text-center rounded-full text-md font-bold ease-in-out duration-500 bg-[#546A7B] hover:text-[#172326] hover:bg-[#62929E] text-[#FDFDFF]">Add Item</Link>
          </div>
        </div>
        <div className="w-full p-10 flex flex-col gap-5 shadow-[0_0_10px_5px_rgba(98,146,158,0.5)]">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold text-[#546A7B]">Auctions</h1>
            <Link to="/auctions/new" className="w-48 px-8 py-2 text-center rounded-full text-md font-bold ease-in-out duration-500 bg-[#546A7B] hover:text-[#172326] hover:bg-[#62929E] text-[#FDFDFF]">Create Auction</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard