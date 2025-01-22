
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideosContainer = () => {
    
    const mostPopularVideos = useSelector(store => store.videos.mostPopular);
    
    return (
        <div className="flex flex-wrap">
            {mostPopularVideos && mostPopularVideos.map((video) => <Link key={video.id} to={"/watch?v="+video.id}><VideoCard info={video} /></Link>)}
        </div>
    )
};

export default VideosContainer;