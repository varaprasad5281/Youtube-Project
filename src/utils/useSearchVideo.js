import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchRelatedVideo } from "./searchSlice";

const useSearchVideo = () => {
  const searchTerm = useSelector((store) => store.search.searchTermVideo);
  const dispatch = useDispatch();

  const getSearchVideo = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchTerm}&type=video&key=AIzaSyAbGC3KfbOVhJ7a5Fym9V0vtqYS9-4kJME`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      dispatch(addSearchRelatedVideo(data.items));
    } catch (error) {
      console.error("Failed to fetch search results:", error);
    }
  };

  useEffect(() => {
    if (!searchTerm) return;
    getSearchVideo();
  }, [searchTerm]);
};

export default useSearchVideo;
