
const HorizontalVideoCard = ({info}) => {
    console.log(info);
    // if(!info) return null;
    const { channelTitle, title, thumbnails, publishedAt } = info?.snippet;
    const { viewCount, likeCount } = info?.statistics;

    return (
        <div className="flex w-3/4 cursor-pointer mx-6 mb-4 h-28 rounded-lg py-2">
            <img className="rounded-lg w-36" alt="video" src={thumbnails?.default?.url} />
            <div className="flex-col ml-2">
                <h4 className="font-semibold text-base line-clamp-2">{title}</h4>
                <h5 className="text-sm">{channelTitle}</h5>
                <h6 className="text-sm">{viewCount} Views</h6>
            </div>
        </div>
    )
};

export default HorizontalVideoCard;