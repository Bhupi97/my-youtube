import CategoryButton from "./CategoryButton";

const CategoriesList = () => {

    const categories = ["All", "Gaming", "Cricket", "News", "Comedy", "Shark Tank", "Sports", "Action", "Drama", "Popular", "Hindi", "Latest", "Trending", "Culture", "Roast", "Hip hop", "Podcasts", "Cookery", "Concerts"];

    return (
        <div className="flex overflow-x-scroll no-scrollbar">
            {categories.map(category => <CategoryButton key={category} name={category} />)}
        </div>
    )
};

export default CategoriesList;