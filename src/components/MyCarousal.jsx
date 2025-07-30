import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel'
import Image from '../assets/volks-1.webp'
import ImageItem from '../assets/ajax-top-img.png'
import ImageItem2 from '../assets/maxresdefault.jpg'

const MyCarousal = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img src={Image} alt="" className='w-full h-[600px] object-cover' />
          </CarouselItem>
          <CarouselItem>
            <img src={ImageItem} alt="" className='w-full h-[600px] object-cover' />
          </CarouselItem>
           <CarouselItem>
            <img src={ImageItem2} alt="" className='w-full h-[600px] object-cover' />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}

export default MyCarousal
