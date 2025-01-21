import React from 'react';

const VideoCard = ({info}) => {
  // console.log(info);

  if (!info?.snippet || !info?.statistics) {
    return <div>Loading...</div>; // Fallback UI for missing data
  }

  const { channelTitle, title, thumbnails, publishedAt } = info?.snippet;
  const { viewCount, likeCount } = info?.statistics;

  return (
    <div>
      <div className="rounded-lg m-2 p-2 shadow-lg w-80">
        <img className="rounded-lg" alt="Video" src={thumbnails?.medium?.url} />
        <div>
          <h1 className="text-md font-bold">{title}</h1>
          <h3>{channelTitle}</h3>
          <h4>{viewCount} Views</h4>
        </div>
      </div>
    </div>
  )
};

export default VideoCard;