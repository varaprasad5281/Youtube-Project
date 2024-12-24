import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "../utils/contstants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const searchResults = useSelector(
    (store) => store.search?.searchVideoResults
  );
  console.log(searchResults);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const data = await fetch(YOUTUBE_VIDEOS_API);
        if (!data.ok) {
          setError("Error while fetching the data from the API");
        }
        const json = await data.json();
        setVideos(json.items || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (!searchResults) {
      fetchVideos();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Shimmer />;
  }

  const videoList = searchResults || videos;
  console.log("re render videos", videoList);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-3">
      {videoList.length === 0 ? (
        <p>If no videos found search something!</p>
      ) : (
        videoList.map((video) => (
          <Link
            className="p-2 shadow-lg rounded-lg"
            to={`/watch?v=${video.id.videoId || video.id}`}
            key={video.id.videoId || video.id}
          >
            <VideoCard info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
