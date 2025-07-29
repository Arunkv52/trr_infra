import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel'
import Image from '../assets/volks-1.webp'

const MyCarousal = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img src={Image} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={Image} alt="" />
          </CarouselItem>
           <CarouselItem>
            <img src={Image} alt="" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}

export default MyCarousal
