import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useCurrentVideoComments from "../hooks/useCurrentVideoComments";

const PlayedVideoDetails = () => {

    const movies = useSelector(store=>store.videos.mostPopular);
    const [searchParams] = useSearchParams();
    const [showDescription, setShowDescription] = useState(false);
    const videoId = searchParams.get("v");
    console.log(videoId);
    useCurrentVideoComments(videoId);
    
    if(!movies)  return;
    const movieDetails = movies.filter(movie => movie.id === videoId);
    const { channelTitle, channelId, title, publishedAt  } = movieDetails[0]?.snippet ;
    const { viewCount, likeCount } = movieDetails[0]?.statistics;
    const { description } = movieDetails[0]?.snippet?.localized;
    const date = new Date(publishedAt);
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
    // console.log(movieDetails);

    const handleShowDescription = () => {
        setShowDescription(!showDescription);
    }


    return (
        <div className="w-full">
            <h1 className="text-xl font-bold">{title}</h1>
            <div>{channelTitle}, Subscribe button----  👍 {likeCount}  Dislike button</div>
            <div className="bg-gray-200 rounded-lg p-2 my-2">
                <span className="font-semibold">{viewCount} Views  {formattedDate}</span> 
                {showDescription ? 
                    <pre className="text-wrap font-sans" onClick={handleShowDescription}>{description}</pre> 
                    : <pre className="text-wrap font-sans line-clamp-2" onClick={handleShowDescription}>{description}</pre>}
            </div>
            {}
        </div>
    )
};

export default PlayedVideoDetails;