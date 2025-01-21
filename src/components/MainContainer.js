import CategoriesList from "./CategoriesList";
import VideosContainer from "./VideosContainer";

const MainContainer = () => {
    return (
        <div className="relative">
            <CategoriesList />
            <VideosContainer />
        </div>
    )
};

export default MainContainer;