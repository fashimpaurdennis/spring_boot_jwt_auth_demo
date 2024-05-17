import { Link } from "react-router-dom";
const AuctionCard = ({imageSource}) => {

  return(
      <Link to="#" className="flex flex-col bg-transparent shadow-[0_0_10px_5px_rgba(84,106,123,0.5)] p-10 gap-10">
        <div className="p-5 h-full flex items-center justify-center">
          <img className="shadow-[10px_15px_5px_0_rgba(0,0,0,0.75)]" src={imageSource}></img>
        </div>
        <div className="">
          <h1>L'opossum</h1>
        </div>
      </Link>
  )
};

export default AuctionCard;
