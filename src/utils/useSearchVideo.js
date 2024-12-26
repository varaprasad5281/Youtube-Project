import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchRelatedVideo } from "./searchSlice";

const useSearchVideo = () => {
  const searchTerm = useSelector((store) => store.search.searchTermVideo);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getSearchVideo = async () => {
    try {
      setLoading(true); // Set loading to true when the fetch starts
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchTerm}&type=video&key=${process.env.REACT_APP_VHUB_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      dispatch(addSearchRelatedVideo(data.items));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchTerm) return; // Don't fetch if searchTerm is empty
    getSearchVideo();
  }, [searchTerm]);

  return { loading, error }; // Return loading and error states to be used by the component
};

export default useSearchVideo;
