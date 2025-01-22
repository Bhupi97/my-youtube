import React from 'react'
import { useSelector } from 'react-redux'
import CommentCard from './CommentCard';

const UserComments = () => {

    const comments = useSelector(store => store.videos.comments);


  return (
    <div className='w-[1020px]'>{
        comments && comments.map(comment => <CommentCard key={comment.id} commentInfo={comment}/>)
    }</div>
  )
}

export default UserComments