import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const SideBar = () => {

    const isSidebarOpen = useSelector(store => store.app?.isSidebarOpen);
    
    // This is known as early return
    if (!isSidebarOpen) return null;

    return (
        <div className="shadow-lg w-1/12 p-5 h-screen pt-20">
            <ul className="">
                <Link to="/"><li>Home</li></Link>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h1 className="font-semibold mt-5">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-semibold mt-5">Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
};

export default SideBar;