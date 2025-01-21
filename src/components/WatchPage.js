import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import ListView from './ListView';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeSidebar());
    }, []);
    

  return (
    <div className='pl-20 flex'>
      <iframe width="1024" height="580" className='rounded-2xl my-4' 
      src={"https://www.youtube.com/embed/"+ searchParams.get("v")  +"?si=4J6FKbkTaoUaOVo8"}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
      </iframe>
      <ListView />
    </div>
  )
}

export default WatchPage;