import React from 'react'

const CommentCard = ({commentInfo}) => {

    // console.log(commentInfo);
    const { authorChannelUrl, authorDisplayName, authorProfileImageUrl, textOriginal } = commentInfo?.snippet?.topLevelComment?.snippet;

    // console.log(authorChannelUrl);
  return (
    <div className='flex my-4 py-2'>
        <img className='rounded-full w-16' alt="channel-logo" src={authorProfileImageUrl} />
        <div className='flex-col mx-2'>
        <h1 className='font-semibold'>{authorDisplayName}</h1>
        <pre className='font-sans text-wrap line-clamp-2'>{textOriginal}</pre>
        </div>
    </div>
  )
}

export default CommentCard;