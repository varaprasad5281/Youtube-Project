import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet || {};
  const currentDate = new Date();
  const publishedDate = new Date(publishedAt);

  const timeDifference = currentDate - publishedDate;

  const daysGap = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const monthsGap = Math.floor(daysGap / 30);
  const yearsGap = Math.floor(monthsGap / 12);
  const hoursGap = Math.floor(timeDifference / (1000 * 60 * 60));

  const timeAgo =
    yearsGap > 0
      ? `${yearsGap} ${yearsGap === 1 ? "year" : "years"} ago`
      : monthsGap > 0
      ? `${monthsGap} ${monthsGap === 1 ? "month" : "months"} ago`
      : daysGap > 0
      ? `${daysGap} ${daysGap === 1 ? "day" : "days"} ago`
      : `${hoursGap} ${hoursGap === 1 ? "hour" : "hours"} ago`;

  let viewsData;
  if (!statistics || !statistics.viewCount) {
    viewsData = "10M+";
  } else if (statistics.viewCount < 1000000 && statistics.viewCount >= 1000) {
    viewsData = Math.round(statistics.viewCount / 1000) + "K+";
  } else {
    viewsData = Math.round(statistics.viewCount / 1000000) + "M+";
  }

  return (
    <div className="flex flex-col gap-2">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium?.url || ""}
        loading="lazy"
      />
      <ul className="p-2 flex flex-col gap-2">
        <li className="font-bold two-line-ellipsis">
          {title || "Untitled Video"}
        </li>
        <li className="text-sm">{channelTitle || "Unknown Channel"}</li>
        <div className="flex justify-start gap-3">
          <li className="text-sm">{viewsData} views</li>
          <li className="text-sm">{timeAgo}</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
