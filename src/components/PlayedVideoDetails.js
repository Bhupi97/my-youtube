import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useCurrentVideoComments from "../hooks/useCurrentVideoComments";
import UserComments from "./UserComments";

const PlayedVideoDetails = () => {

    const movies = useSelector(store=>store.videos.mostPopular);
    const [searchParams] = useSearchParams();
    const [showDescription, setShowDescription] = useState(false);
    const videoId = searchParams.get("v");
    // console.log(videoId);
    useCurrentVideoComments();
    
    if(!movies)  return;
    const movieDetails = movies.filter(movie => movie.id === videoId);
    const { channelTitle, channelId, title, publishedAt  } = movieDetails[0]?.snippet ;
    const { viewCount, likeCount } = movieDetails[0]?.statistics;
    const { description } = movieDetails[0]?.snippet?.localized;
    const date = new Date(publishedAt);
    console.log(movieDetails);
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
        <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="grid grid-cols-12 gap-1">
                <h1 className="text-xl font-semibold col-start-1 col-end-3">{channelTitle}</h1>
            <button className="bg-black text-white mx-2 px-2 rounded-full col-start-3 col-end-4">Subscribe</button>  
            <h1 className="col-start-9 col-end-11">
                <button className="bg-gray-300 p-1 rounded-l-full border-x-2 border-r-gray-500">👍 {likeCount}</button> 
                <button className="bg-gray-300 p-1 rounded-r-full">👎</button> </h1></div>
            <div className="bg-gray-200 rounded-lg p-2 my-2 w-[1020px]">
                <span className="font-semibold">{viewCount} Views  {formattedDate}</span> 
                {showDescription ? 
                    <pre className="text-wrap font-sans" onClick={handleShowDescription}>{description}</pre> 
                    : <pre className="text-wrap font-sans line-clamp-2" onClick={handleShowDescription}>{description}</pre>}
            </div>
            <UserComments />
        </div>
    )
};

export default PlayedVideoDetails;