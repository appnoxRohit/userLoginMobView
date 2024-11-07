import crossIcon from "../assets/Icons.svg";
import { Link } from "react-router-dom";
const MobileTopBar = () => {
  return (
    <div className=" w-full min-h-[72px] border-b-2  flex flex-row-reverse items-center md:h-[10px] md:border-b-0  ">
      <Link to="/mediatrade">
      <img src={crossIcon} alt="" className="w-6 h-6 mr-5  " />

      </Link>
    </div>
  );
};

export default MobileTopBar;