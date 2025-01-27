import { useSelector } from "react-redux";
import useVideoCategories from "../hooks/useVideoCategories";
import CategoryButton from "./CategoryButton";
import { useRef, useState } from "react";

const CategoriesList = () => {

    const scrollContainerRef = useRef(null);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isAtStart, setIsAtStart] = useState(true);


    useVideoCategories();
    const categories = useSelector(store => store.videos.videoCategories);
    if (!categories)  return;
    console.log(categories);

    const scrollToRight = () => {

      const container = scrollContainerRef.current;
        if (container) {
          // Scroll the container to the right by 300px
          const { scrollLeft, scrollWidth, clientWidth } = container;
          if (scrollLeft + clientWidth >= scrollWidth) {
            setIsAtEnd(true);
          } else {
          container.scrollBy({
            left: 300, // Adjust this value as needed
            behavior: "smooth", // Optional: smooth scrolling
          });}
        }
      };

    const scrollToLeft = () => {
      const container = scrollContainerRef.current;

      if(container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        if (scrollLeft !== 0) {
          setIsAtStart(false);
        } else {
        container.scrollBy({
          left: -300, // Adjust this value as needed
          behavior: "smooth", // Optional: smooth scrolling
        });}

      }

    }
    // const { title, id, channelId } = categories?.snippet;

    // const categories = ["All", "Gaming", "Cricket", "News", "Comedy", "Shark Tank", "Sports", "Action", "Drama", "Popular", "Hindi", "Latest", "Trending", "Culture", "Roast", "Hip hop", "Podcasts", "Cookery", "Concerts"];


    return (
        <div  ref={scrollContainerRef} className="flex flex-nowrap overflow-x-scroll pt-20 max-w-[90%]">
          <button 
            className="flex justify-start items-start fixed w-40 p-2 my-2 font-semibold whitespace-nowrap bg-gradient-to-r
             from-white to-transparent bg-opacity-100" onClick={scrollToLeft}>{'<'}</button>
            {categories.map(category => <CategoryButton key={category.id} name={category.snippet.title} />)}
            {!isAtEnd && 
            <button 
            className="flex justify-end font-bold items-end fixed w-40 bg-gradient-to-l from-white to-transparent bg-opacity-100 right-0 p-2 m-2 whitespace-nowrap
             " onClick={scrollToRight}>{'>'}</button>
            }
        </div>
    )
};

export default CategoriesList;