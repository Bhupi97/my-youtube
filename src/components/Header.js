import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import useMostPopularVideos from "../hooks/useMostPopularVideos";



const Header = () => {

    const dispatch = useDispatch();
    useMostPopularVideos();

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar());
    }

    return (
        <div className="flex justify-between items-center m-1 shadow-lg h-16 w-full">
        <div className="flex justify-start w-2/12">
            <img onClick={handleToggleSidebar} className="h-14 my-1 cursor-pointer" alt="Menu" src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"/>
            <img className="h-20 -my-2" alt="Youtube-logo" src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"/>
        </div>
    
        <div className="flex justify-center w-4/12 h-2/3 border border-gray-400 rounded-2xl">
            <input className="border rounded-l-2xl w-full h-full px-2" type="text" placeholder="Search" name="searchText"/>
            <button className="h-full w-2/12 bg-gray-200 rounded-r-2xl">🔍</button>
        </div>
    
        <div className="flex justify-end w-2/12">
            <img className="h-16 mx-2" alt="user-icon" src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"/>
        </div>
    </div>
    )
}

export default Header;