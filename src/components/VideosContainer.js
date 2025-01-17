import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const VideosContainer = () => {


    useEffect(() => {
        loadVideos();
    }, [])

    const loadVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = data.json();
        console.log(json);
    }

    return (
        <div>
            VideosContainer
        </div>
    )
};

export default VideosContainer;