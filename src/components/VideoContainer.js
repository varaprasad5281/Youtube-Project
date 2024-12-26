import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import InfiniteScroll from "react-infinite-scroll-component"; // Import the package
import { useSelector } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "../utils/contstants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pageToken, setPageToken] = useState(""); // For YouTube API pagination
  const searchResults = useSelector(
    (store) => store.search?.searchVideoResults
  );

  const fetchVideos = async (nextPageToken = "") => {
    try {
      const url = `${YOUTUBE_VIDEOS_API}${process.env.REACT_APP_VHUB_KEY}&pageToken=${nextPageToken}`;
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error("Error while fetching the data from the API");
      }
      const json = await data.json();
      setVideos((prevVideos) => [...prevVideos, ...(json.items || [])]);
      setPageToken(json.nextPageToken || ""); // Update the next page token
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchResults) {
      fetchVideos();
    } else {
      setLoading(false);
    }
  }, [searchResults]);

  const fetchNextVideos = () => {
    if (pageToken) {
      fetchVideos(pageToken);
    }
  };

  if (loading && videos.length === 0) {
    return <Shimmer />;
  }

  const videoList = searchResults || videos;

  return (
    <InfiniteScroll
      dataLength={videoList.length} // This determines the number of items currently loaded
      next={fetchNextVideos} // Function to fetch the next set of items
      hasMore={!!pageToken} // Determines if there's more data to load
      loader={<Shimmer />} // Loader shown while fetching
      endMessage={<p className="text-center">No more videos to display</p>} // Message displayed when all data is loaded
    >
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-3">
        {error && <p className="text-red-500">{error}</p>}
        {videoList.length === 0 ? (
          <p className="mx-auto">If no videos found search something!</p>
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
    </InfiniteScroll>
  );
};

export default VideoContainer;
