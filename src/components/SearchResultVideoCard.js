
const SearchResultVideoCard = ({videoInfo}) => {

    console.log(videoInfo);

    const { title, description, channelTitle, thumbnails, publishedAt } = videoInfo.snippet; 
    const { videoId } = videoInfo.id;



    return (
    <div className="flex my-4">
        <div><img className="rounded-lg" alt="video-thumbnail" src={thumbnails.high.url} /></div>
        <div className="ml-4">
            <h1 className="text-2xl font-bold">
                {title}
            </h1>
            <h4>{publishedAt}</h4>
            <h4>{channelTitle}</h4>
            <h4 className="text-wrap line-clamp-1">{description}</h4>
        </div>
    </div>
  )
}

export default SearchResultVideoCard;