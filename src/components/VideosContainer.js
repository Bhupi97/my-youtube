import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideosContainer = () => {
    const [videos, setVideos] = useState([]);


    useEffect(() => {
        loadVideos();
    }, [])

    const loadVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = data.json();
        console.log(json?.items);
        setVideos(json?.items);
    }

    return (
        <div>
            {videos && <VideoCard info={videos[0]} />}
        </div>
    )
};

export default VideosContainer;