import React from 'react'
import Sidebar from '../Components/Sidebar'
import MobileTopBar from '../Components/MobileTopBar'
import icon from '../assets/icon.png'
const MessageInvitation = () => {
  return (
    <div className='flex flex-col '>

    <div className='flex'>
        <Sidebar/>
    </div>

    <MobileTopBar/>
    <div className='flex w-full flex-col   justify-center items-center'>
      <div >
      <img className='pt-[180px]' src={icon} alt="icon" /> 
      </div>
      <div className='flex flex-col mt-[28px] justify-center items-center'>
        <p className='text-[40px] font-dm-serif'>Messaggio Inviato</p>
        <p className='text-center mt-[24px] font-inter text-[14px]'>Lorem ipsum dolor sit amet consectetur jhon decaprio espanol camrdre adipisicing elit. Eum, expedita.</p>
      </div>
      <div className=' flex justify-center mt-[28px] items-center border-2 border-black w-[120px] h-[56px] rounded-full'>
        <p>CHUIDI</p>
      </div>
      

            

        </div>
    </div>
    
  )
}

export default MessageInvitation