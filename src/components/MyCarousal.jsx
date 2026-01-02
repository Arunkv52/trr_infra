import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "../assets/volks-1.webp";
import ImageItem from "../assets/ajax-top-img.png";

const MyCarousal = () => {
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000, // time between slides (ms)
            stopOnInteraction: false, // keep autoplay after manual scroll
          }),
        ]}
        opts={{
          loop: true, // infinite looping
        }}
        className="w-full"
      >
        <CarouselContent>
          
          <CarouselItem>
            <img src={Image} alt="Slide 2" className="w-full h-[600px] object-cover" />
          </CarouselItem>
          
        </CarouselContent>
        {/* No CarouselPrevious / CarouselNext for clean autoplay */}
      </Carousel>
    </>
  );
};

export default MyCarousal;
