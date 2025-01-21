import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { addMostPopular } from "../utils/videosSlice";

const useMostPopularVideos = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        loadVideos();
        // console.log(videos);
    }, []);


    const loadVideos = async () => {
        console.log(YOUTUBE_VIDEOS_API);
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        // console.log(json.items);
        dispatch(addMostPopular(json.items));
    };
    
};

export default useMostPopularVideos;