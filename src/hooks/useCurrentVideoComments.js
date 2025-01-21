// import { useDispatch } from "react-redux"
import { COMMENTS_THREAD_API } from "../utils/constants"
import { useEffect } from "react";

const useCurrentVideoComments = ({ videoId }) => {


    const fetchComments = async (videoId) => {
        if (!videoId) return;
        console.log(videoId);
        console.log(COMMENTS_THREAD_API + videoId + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY);

        const data = await fetch(COMMENTS_THREAD_API + videoId + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY);
        // const data = await fetch(COMMENTS_API + videoId + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY);
        const json = await data.json();
        console.log(json);
    }

    useEffect(() => {
        if(videoId) {
            fetchComments(videoId);
        }
    }, [videoId])
};

export default useCurrentVideoComments;