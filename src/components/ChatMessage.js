import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center my-2 w-full'>
        <div>
        <img className="h-12 mx-2" alt="user-icon" src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"/>
        </div>
        <div>
        <span className='font-semibold'>{name}</span>
        <span className='text-md ml-2'>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage