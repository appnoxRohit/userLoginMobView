import crossIcon from "../assets/Icons.svg";

const MobileTopBar = () => {
  return (
    <div className=" w-full min-h-[72px] border-b-2  flex flex-row-reverse items-center md:hidden  ">
      <img src={crossIcon} alt="" className="w-6 h-6 mr-5  " />
    </div>
  );
};

export default MobileTopBar;