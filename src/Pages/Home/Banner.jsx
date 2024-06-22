import { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const CarouselMain = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [
      {
        img: "https://i.ibb.co/ZgmJYLM/8011bf2cc1c0c795053ccbee93854394.jpg",
        tags: "Room",
      },
      {
        img: "https://i.ibb.co/qnvsy6g/beautiful-couple-having-their-wedding-beach-23-2149043947.jpg",
        tags: "Room",
      },
      {
        img: "https://i.ibb.co/W3LZvfm/pexels-photo-792777-jpeg-cs-srgb-dl-pexels-annetnavi-792777.jpg",
        tags: "Room",
      },
      {
        img: "https://i.ibb.co/hXFFZ2N/depositphotos-212072892-stock-photo-portrait-happy-young-couple-hugging.webp",
        tags: "Room",
      },
    ];
    const nextSlider = () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
      );
    return (
      <div className=" h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
        {/* arrow */}
        <button
          onClick={nextSlider}
          className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite "
        >
          <svg
            className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(180)"
          >
            <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
          </svg>
        </button>
        {/* slider container */}
        <div
          className="ease-linear duration-300 flex gap-[2%]"
          style={{ transform: `translateX(-${currentSlider * 52}%)` }}
        >
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <div
              key={inx}
              className={`${
                currentSlider === inx
                  ? "h-[310px] md:h-[310px] lg:h-[580px] "
                  : "h-[260px] md:h-[280px] lg:h-[480px]"
              } min-w-[50%] bg-black/30 relative duration-200`}
            >
              <img src={slide.img} className="w-full h-full" alt={slide.tags} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className=" h-[540px] lg:h-[670px] px-3 lg:px-10 flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 relative">
      {/* <div className="w-full absolute left-0 h-[540px] lg:h-[670px] -z-40"></div> */}
      <div className="w-1/2 lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
        <h5 className="text-[#616161] text-xs md:text-2xl">#1 MATRIMONY</h5>
        <h1 className="text-lg md:text-2xl lg:text-5xl font-bold text-[#66451c]">
          Find your Right Match here
        </h1>
        <p className="text-[#616161] text-xs md:text-lg">
          Most trusted Matrimony Brand in the World.
        </p>
        <Link to="/biodatas">
          <button className="font-bold py-2 xl:py-3 text-xs md:text-base lg:text-lg xl:text-xl hover:scale-95 duration-300 px-4 lg:px-10 text-white bg-[#66451c] mt-4">
            Explore More
          </button>
        </Link>
      </div>
      <div className="w-1/2">
        <CarouselMain />
      </div>
    </div>
  );
};

export default Banner;
