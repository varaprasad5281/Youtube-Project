import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchRelatedVideo } from "./searchSlice";

const useSearchVideo = () => {
  const searchTerm = useSelector((store) => store.search.searchTermVideo);
  const dispatch = useDispatch();
  const getSearchVideo = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchTerm}&type=video&key=AIzaSyAbGC3KfbOVhJ7a5Fym9V0vtqYS9-4kJME`
    );
    const data = await response.json();

    dispatch(addSearchRelatedVideo(data.items));
  };
  useEffect(() => {
    if (!searchTerm) return;
    getSearchVideo();
  }, [searchTerm]);
};
export default useSearchVideo;
