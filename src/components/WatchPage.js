import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import ListView from './ListView';
import PlayedVideoDetails from './PlayedVideoDetails';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeSidebar());
    }, []);
    

  return (
    <div className='pl-20 flex pt-20'>
      <div>
      <iframe width="1020" height="620" className='rounded-2xl my-4' 
      src={"https://www.youtube.com/embed/"+ searchParams.get("v")  +"?si=4J6FKbkTaoUaOVo8"}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
      </iframe>
      <PlayedVideoDetails />
      </div>
      <LiveChat />
      {/* <ListView /> */}
    </div>
  )
}

export default WatchPage;