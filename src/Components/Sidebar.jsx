import loginBtn from "../assets/login.svg";
import TvIcon from "../assets/tv.svg";
import textIcon from "../assets/textsms.svg";
import helpIcon from "../assets/helpIcon.svg";
import collectionIcon from "../assets/collections.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden fixed border-2 md:z-30 md:w-[5%] md:flex flex-col justify-between items-center  h-screen ">
      <div className="h-14 w-14 flex justify-center items-center">
        <Link to="/contactPage">
          <img src={loginBtn} alt="" className="h-8 w-8" />
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        <img src={collectionIcon} alt="" />
        <img src={TvIcon} alt="" />
        <img src={helpIcon} alt="" />
      </div>
      <div className="h-14 w-14 bg-black flex justify-center items-center rounded-full">
        <img src={textIcon} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
