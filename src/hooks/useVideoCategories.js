import { useEffect } from "react";
import { YOUTUBE_CATEGORIES_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "../utils/videosSlice";



const useVideoCategories = () => {

    const dispatch = useDispatch()
    const categories = useSelector(store => store.videos.videoCategories);

    const getCategories = async () => {
        const data = await fetch(YOUTUBE_CATEGORIES_API);
        const json = await data.json();
        dispatch(addCategories(json.items));
    }

    useEffect(() => {
        !categories && getCategories(); // MEmoization
    }, []);

};

export default useVideoCategories;