import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { LOGO_LINK, YOUTUBE_SEARCH_API } from "../utils/contstants";
import { addSearchTerm, cacheReuslts } from "../utils/searchSlice";
import useSearchVideo from "../utils/useSearchVideo";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showsSuggestion, setShowSuggestions] = useState(false);
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
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchData(json[1]);
    dispatch(
      cacheReuslts({
        [searchQuery]: json[1],
      })
    );
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

  const searchValue = searchQuery.length > 1;

  return (
    <div className="bg-white grid grid-flow-col p-3 my-2 shadow-lg sticky top-0 z-[9999] h-16">
      <div className="flex col-span-1 items-center fixed left-5 top-5">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
        ></img>
        <a
          className=" text-red-700 text-xl font-semibold font-serif ml-3"
          href="/"
        >
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
            <p className="text-black text-3xl">Hub</p>
          </div>
        </a>
      </div>
      <div className="col-span-10 text-center">
        <form onSubmit={handleSubmit}>
          <input
            className="w-1/2 border border-gray-400 rounded-l-full py-1 px-3"
            type="text"
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onChange={(e) => setSearchQuery(e.target.value)}
            // onBlur={() => setShowSuggestions(false)}
          />
          <button
            type="submit"
            className="bg-gray-100 border border-gray-400 py-1 px-3 rounded-r-full"
          >
            🔍
          </button>

          {searchValue && showsSuggestion && (
            <div className="w-full sm:w-1/2 text-left m-auto bg-white z-[1000] rounded-lg py-2 px-4 border border-gray-200 shadow-lg">
              <ul className="list-none">
                {searchData.map((item, index) => (
                  <li
                    onClick={() => handleSelectSearch(item)}
                    key={index}
                    className="py-2 hover:bg-gray-100"
                  >
                    🔍 {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>
      <div className="col-span-1 hidden sm:block">
        <img
          className="h-8"
          src="data:image/png;base64,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"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
