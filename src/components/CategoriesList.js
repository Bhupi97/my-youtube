import CategoryButton from "./CategoryButton";

const CategoriesList = () => {

    const categories = ["All", "Gaming", "Cricket", "News", "Comedy", "Shark Tank", "Sports", "Action", "Drama", "Popular", "Hindi", "Latest", "Trending", "Culture", "Roast", "Hip hop", "Podcasts"];

    return (
        <div className="flex">
            {categories.map(category => <CategoryButton key={category} name={category} />)}
        </div>
    )
};

export default CategoriesList;