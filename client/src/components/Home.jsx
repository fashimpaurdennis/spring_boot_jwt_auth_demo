import AuctionCard from "./AuctionCard";

const Home = () => {
  const stuff = [1, 2, 3, 4, 1, 1];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="fixed">
        <div className="flex flex-col w-64 h-[calc(100vh-4rem)] p-8 bg-[#d9d9d9]">
          <div className="">
            <ul className="font-bold text-[#0A0A0B]">
              <li>+ Style</li>
              <li>+ Medium</li>
              <li>+ Artist</li>
              <li>+ Gallery</li>
              <li>+ Price</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ml-64 p-5 flex flex-col gap-10">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center px-4 py-2 rounded-full outline outline-4 outline-[#62929E]">
            <img className="h-5 mr-4" src="./src/assets/search-icon.png"></img>
            <input
              className="w-full outline-none text-3xl text-[#0A0A0B]"
              type="text"
            ></input>
          </div>
        </form>
        <div className="grid grid-cols-4 gap-10">
          {stuff.map((thing, index) => {
            return (
              <AuctionCard
                imageSource={
                  index % 2 === 0
                    ? "./src/assets/wizard_possum_art.jpg"
                    : "./src/assets/possum_king.jpg"
                }
              />
            );
          })}
        </div>
      </div>
  </div>
    );
};

export default Home;
