import React from 'react'
import MyCarousal from '../components/MyCarousal'
import Gal_1 from '../assets/gal-1.webp'
import Gal_2 from '../assets/gal-2.webp'
import Gal_3 from '../assets/gal-3.webp'

const Gallery = () => {
  return (
    <>
      <div className='gallery md:px-10 px-5 py-10'>
        <div className='gal-txt md:w-5/6 w-full'>
          <h2 className='font-bold text-2xl pb-4'>Gallery</h2>
          <p>
            Dreaming, daring, doing what you want. The all-new electric ID. Buzz
            was built for people who don’t see things in black and white. Once
            you climb inside, you’ll get what we mean. You’ll find more space
            than you expect, more color than you’ve imagined, and a driving
            experience that just feels … right.
          </p>
        </div>
        <div className='box-3-img md:flex justify-between items-center gap-5 md:py-5'>
         
          <div className='box-1 py-6'>
            <img src={Gal_2} alt='' />
            <h5 className='pt-5 text-[18px] font-semibold'>
              Let your light shine
            </h5>
          </div>
           <div className='box-1 py-6'>
            <img src={Gal_1} alt='' />
            <h5 className='pt-5 text-[18px] font-semibold'>
              Let your light shine
            </h5>
          </div>
          <div className='box-1 py-6'>
            <img src={Gal_3} alt='' />
            <h5 className='pt-5 text-[18px] font-semibold'>
              Let your light shine
            </h5>
          </div>
        </div>
        <div className='my-carousal py-10 md:px-20 px-0'>
          <h5 className='md:text-[40px] text-[25px] py-5 font-semibold'>We built the ID. Buzz to be an icon. See what goes into it.</h5>
          <MyCarousal />
        </div>
      </div>
    </>
  )
}

export default Gallery
