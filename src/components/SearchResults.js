import { useSelector } from "react-redux";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResults = () => {

    const searchQueryResults = useSelector(store => store.videos.searchQueryResults);

    if(!searchQueryResults) return;


    return (
         <div className="pt-20 mx-20 my-4">
           {searchQueryResults.map(result =>  <SearchResultVideoCard key={result.id.videoId} videoInfo={result}/>)}
         </div>
    )
};


export default SearchResults;