import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "../assets/volks-1.webp";
import ImageItem from "../assets/ajax-top-img.png";
import ImageItem2 from "../assets/maxresdefault.jpg";

const MyCarousal = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
           <CarouselItem>
            <img
              src={ImageItem}
              alt=""
              className="w-full md:h-[600px] h-auto object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src={Image}
              alt=""
              className="w-full md:h-[600px] h-auto object-cover"
            />
          </CarouselItem>
         
          <CarouselItem>
            <img
              src={ImageItem2}
              alt=""
              className="w-full md:h-[600px] h-auto object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className={"hidden md:block"} />
        <CarouselNext className={"hidden md:block"} />
      </Carousel>
    </>
  );
};

export default MyCarousal;
