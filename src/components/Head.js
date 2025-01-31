import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { LOGO_LINK, YOUTUBE_SEARCH_API } from "../utils/contstants";
import { addSearchTerm, cacheReuslts } from "../utils/searchSlice";
import useSearchVideo from "../utils/useSearchVideo";
import Avatar from "./Avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import Theme from "./Theme";
import { IoSearch } from "react-icons/io5";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [error, setError] = useState("");
  const [showsSuggestion, setShowSuggestions] = useState(false);
  const themeData = useSelector((store) => store.colors.styles[0]);
  const themeSelector = useSelector((store) => store.colors.isDarkMode);
  useSearchVideo();
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    // Make an API call after every key press
    // But if the difference between 2 api calls is <200ms
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchData(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    // Unmounting Stage (clearing the intervals)
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      if (!data.ok) {
        throw new Error("Error while fetching the data");
      }
      const json = await data.json();
      setSearchData(json[1]);
      dispatch(
        cacheReuslts({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      setError("Error occured while fetchig the data form the API", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSelectSearch = (item) => {
    dispatch(addSearchTerm(item));
    setSearchQuery(item);
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSearchTerm(searchQuery));
    setShowSuggestions(false);
  };

  // const handleBlur = () => {
  //   setShowSuggestions(false);
  // };

  const searchValue = searchQuery.length > 1;

  return (
    <div
      className={`${themeData} flex gap-2 sm:gap-4 items-center justify-between p-3 sm:px-5 shadow-lg sticky top-0 z-[9999] h-16`}
    >
      <div className="left-3 flex items-center sm:left-5 shrink-0">
        {/* <img
          onClick={() => toggleMenuHandler()}
          className="hidden sm:block h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
        ></img> */}
        <div
          onClick={() => toggleMenuHandler()}
          className="text-2xl hidden sm:flex h-8 cursor-pointer justify-center items-center"
        >
          <GiHamburgerMenu />
        </div>
        <a className="ml-0 text-xl font-semibold font-serif sm:ml-3" href="/">
          {/* <img
            className="h-10 mx-2 "
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="logo"
          ></img> */}
          <div className="flex items-center">
            <div className="">
              {/* <p className="text-3xl">V</p> */}
              <img className="w-8" src={LOGO_LINK} alt="logo" />
            </div>
            <p className="text-3xl hidden sm:block">Hub</p>
          </div>
        </a>
      </div>
      <form onSubmit={handleSubmit} className="max-w-[600px] w-full">
        <div className="flex justify-end sm:justify-center">
          <input
            className="w-full border border-gray-400 rounded-full sm:rounded-l-full sm:rounded-r-none bg-transparent p-2 sm:px-5"
            type="text"
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onChange={(e) => setSearchQuery(e.target.value)}
            // onBlur={handleBlur}
            placeholder="Search"
          />
          <button
            type="submit"
            className=" border border-gray-400 py-1 px-3 rounded-r-full hidden sm:block"
          >
            <IoSearch />
          </button>
        </div>

        {searchValue && showsSuggestion && (
          <div
            className={`${themeData} absolute max-w-[600px] md:w-100% md:w-full md:mx-auto z-[1000] rounded-lg py-2 px-4 border border-gray-200 shadow-lg`}
          >
            <ul className="list-none">
              {searchData.map((item, index) => (
                <li
                  onClick={() => handleSelectSearch(item)}
                  key={index}
                  className="py-2 cursor-pointer flex items-center gap-3"
                >
                  <IoSearch /> {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
      <div className="flex gap-4">
        <Theme />
        <Avatar />
      </div>
    </div>
  );
};

export default Head;
