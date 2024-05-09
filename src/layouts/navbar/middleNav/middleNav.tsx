import { Box } from "@mui/material";
import mappingData from "./menuItems";
import { useState } from "react";

const MiddleNav = () => {
  const [selected, setSelected] = useState(1);
  return (
    <>
      <Box className=" w-full flex items-center justify-around gap-1 px-1">
        {mappingData?.menuItems?.map((item, index) => (
          <Box
            onClick={() => setSelected(item?.id)}
            className={`transition ease-in-out delay-150 w-[90%] h-full flex items-center justify-center ${
              item?.id === selected
                ? "border-b-[3px] border-blue-600"
                : "border-b-[3px] border-white"
            } cursor-pointer`}
          >
            <Box
              key={index}
              className={`w-[90%] h-[90%] flex items-center justify-center rounded-md hover:bg-gray-200 ${
                item?.id === selected ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {item?.icon}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default MiddleNav;
