import { RefObject, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import SliderCard from "./sliderCard";

type ContainerElementType = HTMLDivElement;

const StorySlider = () => {
  const containerRef: RefObject<ContainerElementType> = useRef(null);

  useEffect(() => {
    console.log(containerRef.current?.scrollLeft);
  }, [containerRef.current?.scrollLeft]);

  const scrollLeft = () => {
    if (containerRef.current) {
      console.log(containerRef.current.scrollLeft);
      containerRef.current.scrollLeft -= 100; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      console.log(containerRef.current?.scrollLeft);
      containerRef.current.scrollLeft += 100; // Adjust scroll distance as needed
    }
  };

  return (
    <>
      <Box className="relative w-full  sm:w-[80%]">
        <Box
          onClick={scrollLeft}
          className="absolute bg-white rounded-full w-10 h-10 top-[50%] left-5 flex justify-center items-center cursor-pointer"
        >
          <KeyboardArrowLeftRoundedIcon />
        </Box>
        <Box
          ref={containerRef}
          className="flex overflow-scroll scrollbar-hidden overflow-y-hidden h-64 gap-2 p-1  "
        >
          <SliderCard />
        </Box>
        <Box
          onClick={scrollRight}
          className="absolute bg-white rounded-full w-10 h-10 top-[50%] right-5 flex justify-center items-center cursor-pointer"
        >
          <KeyboardArrowRightRoundedIcon />
        </Box>
      </Box>
    </>
  );
};

export default StorySlider;
