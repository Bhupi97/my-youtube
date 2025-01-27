import { useSelector } from "react-redux";
import useVideoCategories from "../hooks/useVideoCategories";
import CategoryButton from "./CategoryButton";
import { useRef } from "react";

const CategoriesList = () => {

    const scrollContainerRef = useRef(null)


    useVideoCategories();
    const categories = useSelector(store => store.videos.videoCategories);
    if (!categories)  return;
    console.log(categories);

    const scrollToRight = () => {
        if (scrollContainerRef.current) {
          // Scroll the container to the right by 300px
          scrollContainerRef.current.scrollBy({
            left: 300, // Adjust this value as needed
            behavior: "smooth", // Optional: smooth scrolling
          });
        }
      };
    // const { title, id, channelId } = categories?.snippet;

    // const categories = ["All", "Gaming", "Cricket", "News", "Comedy", "Shark Tank", "Sports", "Action", "Drama", "Popular", "Hindi", "Latest", "Trending", "Culture", "Roast", "Hip hop", "Podcasts", "Cookery", "Concerts"];


    return (
        <div  ref={scrollContainerRef} className="flex flex-nowrap overflow-x-scroll pt-20 max-w-[90%]">
            {categories.map(category => <CategoryButton key={category.id} name={category.snippet.title} />)}
            <button className="flex justify-end fixed w-[20%] right-0 rounded-md p-2 m-2 font-semibold whitespace-nowrap bg-gradient-to-l from-white text-center" onClick={scrollToRight}>{'>'}</button>
        </div>
    )
};

export default CategoriesList;