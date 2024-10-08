import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const SuccessStory = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const axiosPublic = useAxiosPublic();

  const { isLoading: isLoadingSuccessStoryBio, data: SuccessStories = [] } =
    useQuery({
      queryKey: ["SuccessStories"],
      queryFn: async () => {
        const res = await axiosPublic.get("/successStory", {
          withCredentials: true,
        });
        return res.data;
      },
    });
  if (isLoadingSuccessStoryBio) {
    return (
      <div className="w-10 h-10 mx-auto mt-10">
        <div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full">
          <span className="h-5 w-5 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span>{" "}
          <span className="h-5 w-5 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span>
          <span className="h-5 w-5 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span>
          <span className="h-5 w-5 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span>
        </div>
      </div>
    );
  }

  const sliders = SuccessStories;
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  const isSmallScreen = window.innerWidth <= 768;
  
  return (
    <div className="mt-10 lg:mt-28">
      <div>
        <p className="text-[#F2D184] text-center text-3xl font-poppins mt-6 md:mt-10 lg:mt-14">
          Moment's
        </p>
        <h2 className="text-[#66451c] text-center text-4xl font-poppins -mt-4">
          Success Story
        </h2>
      </div>
      <div
        className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
        style={{
          backgroundImage: `url(${
            currentSlider === 0
              ? sliders[sliders.length - 1]?.img
              : sliders[currentSlider - 1]?.img
          })`,
        }}
      >
        {/* arrow */}
        <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        {/* text container here */}
        <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-black rounded-lg">
          <h1 className="lg:text-xl text-[#66451c] mb-3">
            Date of Marriage:{" "}
            {sliders[currentSlider]?.dateOfMarriage.slice(0, 10)}
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#66451c] font-semibold">
            <span className="text-xl">Success Story</span>:{" "}
            {sliders[currentSlider]?.successStory}
          </p>
        </div>
        {/* slider container */}
        <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
          <div
            className="ease-linear duration-300 flex gap-4 items-center"
            style={{
              transform: `translateX(-${
                currentSlider * (isSmallScreen ? 98 : 200)
              }px)`,
            }}
          >
            {/* sliders */}
            {sliders.map((slide, inx) => (
              <img
                key={inx}
                src={slide.coupleImage}
                className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
                  currentSlider - 1 === inx ? "scale-0" : "scale-100 delay-500"
                } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                alt={slide.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
