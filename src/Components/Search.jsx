import React from 'react'
import VerticalLine from './VerticalLine'

const Search = () => {
  return (
    <div>
        <div>
        <input className='text-[60px] md:text-[120px] md:mt-[22px]' type="text" placeholder='Cerca' />
        </div>
        <hr className='border-2 md:w-[1360px]  '  />

        <div className='flex gap-6 pt-10 '>
            <div className='flex items-center justify-center w-[76px] h-[44px] md:w-[118px] md:h-[56px] rounded-full bg-black'>
                <button className='text-white text-xs md:text-base'>TUTTE</button>
            </div>
            <div className='flex items-center justify-center w-[76px] h-[44px] md:w-[118px] md:h-[56px] border-2 border-black rounded-full'>
                <button className='text-xs md:text-base'>ARTE</button>
            </div>
            <div className='flex items-center justify-center w-[76px] h-[44px] md:w-[118px] md:h-[56px] border-2 border-black rounded-full'>
                <button className=' text-xs md:text-base'>OROLOGI</button>
            </div>
            <div className='flex items-center justify-center w-[76px] h-[44px] md:w-[118px] md:h-[56px] border-2 border-black rounded-full'>
                <button className='text-xs md:text-base'>GEOELLIE</button>
            </div>
            <div className='hidden md:flex items-center justify-center w-[76px] h-[44px]  md:w-[118px] md:h-[56px] border-2 border-black rounded-full'>
                <button className='text-xs md:text-base'>DESIGN</button>
            </div>
            
        </div>
        
        

        
    </div>
  )
}

export default Search