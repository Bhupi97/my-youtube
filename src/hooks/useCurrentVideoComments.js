// import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom";
import { COMMENTS_THREAD_API } from "../utils/constants"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addComments } from "../utils/videosSlice";

const useCurrentVideoComments = () => {

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log("From useEffect :"+ videoId);
        if(videoId) {
            fetchComments(videoId);
        }
    }, [videoId])

    const fetchComments = async (videoId) => {
        if (!videoId) return;
        const data = await fetch(COMMENTS_THREAD_API + videoId + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY);
        const json = await data.json();
        console.log(json.items);
        dispatch(addComments(json.items));
    };

    
};

export default useCurrentVideoComments;