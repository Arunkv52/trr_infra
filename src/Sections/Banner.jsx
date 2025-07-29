import React from 'react'
import '../styles/Banner.css'


const Banner = () => {
  return (
    <>
      <div className='bann-txt md:px-10 px-5 bg-cover bg-center'>
        <div className='bann-text-next relative top-2/4'>
          <h1 className='text-white md:text-5xl text-4xl md:w-1/3 w-full'>
            The 2025 ID. Buzz electric bus
          </h1>
          <p className='text-white md:text-[18px] text-[16px] py-5 md:w-1/3'>
            Room for big adventures, personality for miles, and electric
            technology for the next generation.
          </p>
          <div className='header-btn flex justify-start md:gap-8 gap-4 flex-wrap py-2'>
            <div className='btn-1 border-2 border-white text-white w-fit px-10 md:py-2 py-3 rounded-3xl hover:bg-white hover:text-black font-semibold'>
              Buy your ID Buzz
            </div>
            <div className='btn-2 border-2 border-white bg-white text-black w-fit px-10 md:py-2 py-3 rounded-3xl hover:bg-[#020741] hover:border-0 hover:text-white font-semibold'>
              Buy your ID Buzz
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
