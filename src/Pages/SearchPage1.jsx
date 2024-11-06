import React from "react";
import MobileTopBar from "../Components/MobileTopBar";
import Search from "../Components/Search";
import SearchSuggestion from "../Components/SearchSuggestion";

const SearchPage1 = () => {
  return (
    <>
      <MobileTopBar />
      <div className="px-5 md:pl-[120px]"> 
        <Search />
      </div>
      <SearchSuggestion/>
    </>
  );
};

export default SearchPage1;
