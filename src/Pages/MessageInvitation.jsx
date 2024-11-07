import React from 'react'
import Sidebar from '../Components/Sidebar'
import MobileTopBar from '../Components/MobileTopBar'
import icon from '../assets/icon.png'
const MessageInvitation = () => {
  return (
    <div className='flex'>
    <div className=''>
        <Sidebar/>
        <MobileTopBar/>

    </div>
    <div className='flex justify-center items-center'>
            <img src={icon} alt="icon" /> 

        </div>
    </div>
    
  )
}

export default MessageInvitation