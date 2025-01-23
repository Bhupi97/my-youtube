import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import useMostPopularVideos from "../hooks/useMostPopularVideos";
import { useEffect, useState } from "react";
import { YOUTUBE_AUTOSUGGEST_API, YOUTUBE_SEARCH_API } from "../utils/constants";
import { CacheResults } from "../utils/searchSlice";
import { addSearchResults } from "../utils/videosSlice";
import { Link } from "react-router-dom";



const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [performSearch, setPerformSearch] = useState(null);

    const searchCache = useSelector(store=> store.search);
    
    const dispatch = useDispatch();
    useMostPopularVideos();


    // console.log(performSearch);
    useEffect(()=> {
        console.log("Use Effect is called with query :" + performSearch);
        if(performSearch) {
            // Call searchAPI
            searchKeyword();
        }

    }, [performSearch])

    const searchKeyword = async () => {
        console.log(YOUTUBE_SEARCH_API + performSearch + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY);
        const data = await fetch(YOUTUBE_SEARCH_API + performSearch + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY);
        const json = await data.json();
        // console.log(json.items);
        dispatch(addSearchResults(json.items));
    }

    useEffect(() => {
        // API Call for Autosuggestion
        // Make an API call after every key press
        // but if the difference between 2 API calls is < 200ms
        // Decline the API call
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            }
            else {
                getSearchSuggestions()
            }
            }, 200);

        return () => {
            clearTimeout(timer);
        }

        // Key - S
        // - render the Component
        // - useEffect
        // - start timer => make api call after 200ms

        // Key - Su
        // - Destroy the component(useEffect return method used for when component unmount)
        // - re-render the component
        // - useEffect()
        // - start timer => make api call after 200ms
        // ... So on

    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_AUTOSUGGEST_API+ searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);
        dispatch(CacheResults({[searchQuery]: json[1]}));
    }

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar());
    }

    return (
        <div className="flex justify-between items-center shadow-lg h-16 w-full fixed z-10 bg-white top-0 left-0">
        <div className="flex justify-start w-2/12">
            <img onClick={handleToggleSidebar} className="h-14 my-1 cursor-pointer" alt="Menu" src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"/>
            <img className="h-20 -my-2" alt="Youtube-logo" src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"/>
        </div>
    
        <div className="flex justify-center w-4/12 h-2/3 border border-gray-400 rounded-2xl">
            <input className="border rounded-l-2xl w-full h-full px-2" type="text" placeholder="Search" name="searchText" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}/>
            {showSuggestions && <div className="bg-white mt-12 fixed z-10 w-1/3 rounded-lg shadow-lg">
                <ul>
                    {suggestions.map(s => <Link key={s} to={"/results?search_query=" + s}><li className="p-2 hover:bg-gray-100 font-semibold cursor-pointer"  onClick={() => setPerformSearch(s)}>{s}</li></Link>)}
                </ul> 
            </div>}
           <button className="h-full w-2/12 bg-gray-200 rounded-r-2xl">🔍</button>
        </div>
    
        <div className="flex justify-end w-2/12">
            <img className="h-16 mx-2" alt="user-icon" src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"/>
        </div>
    </div>
    )
}

export default Header;