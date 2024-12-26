import { useEffect } from "react";
import { VHUB_KEY } from "./contstants";
const useChannelDetails = () => {
  useEffect(() => {
    getChannelDetails();
  }, []);
  const getChannelDetails = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${VHUB_KEY}`
    );
    const data = await response.json();
    console.log("Youtube channel data", data);
  };
};
export default useChannelDetails;