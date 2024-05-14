import { Box, Typography } from "@mui/material";
import data from "../../data";
import UserProfilePlaceholder from "../../../../components/userProfilePlaceholder/userProfilePlaceholder";

const SliderCard = () => {
  return (
    <>
      {data?.storyData?.map((item, index) => (
        <Box
          key={index}
          sx={{
            backgroundImage: `url(${item?.story})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="bg-slate-400 min-w-36 rounded-xl p-1"
        >
          <Box className="rounded-full bg-blue-600 h-10 w-10 m-3 flex justify-center items-center ">
            <UserProfilePlaceholder
              image={item?.profileImg}
              h="80%"
              w="2.1rem"
              iconHeight="1.6rem"
            />
          </Box>
          <p className="flex justify-start items-end w-full h-[72%] text-white font-semibold text-sm ml-2">
            {item?.userName}
          </p>
        </Box>
      ))}
    </>
  );
};

export default SliderCard;
