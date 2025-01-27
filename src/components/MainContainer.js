import CategoriesList from "./CategoriesList";
import VideosContainer from "./VideosContainer";

const MainContainer = () => {
    return (
        <div className="max-w-full">
            <CategoriesList />
            <VideosContainer />
        </div>
    )
};

export default MainContainer;