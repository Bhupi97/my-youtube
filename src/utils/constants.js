export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=CA&key=" + process.env.REACT_APP_YOUTUBE_API_KEY;

export const COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/comments?part=snippet&videoId=7LV5wY-iM34&parentId=";

export const COMMENTS_THREAD_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=";

export const YOUTUBE_AUTOSUGGEST_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const YOUTUBE_CATEGORIES_API = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=CA&key=" + process.env.REACT_APP_YOUTUBE_API_KEY;