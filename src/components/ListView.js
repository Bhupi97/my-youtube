import { useSelector } from "react-redux";
import HorizontalVideoCard from "./HorizontalVideoCard";
import { Link } from "react-router-dom";

const ListView = () => {

    const mostPopularVideos = useSelector(store => store.videos.mostPopular);

    // useEffect(() => {
    //     console.log(mostPopularVideos);
    // }, [mostPopularVideos]);


    return (
        <div className="h-full my-4 w-2/5">
            {mostPopularVideos && 
            mostPopularVideos.map(video => <Link key={video.id} to={"/watch?v="+video.id}><HorizontalVideoCard info={video} /></Link>)}
            {/*  */}
        </div>
    )
};

export default ListView;