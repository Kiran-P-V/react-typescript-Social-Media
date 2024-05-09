import { Box } from "@mui/material";
import UserProfilePlaceholder from "../../../../components/userProfilePlaceholder/userProfilePlaceholder";
import MammmoottyTurboImage from "../../../../assets/dummyDatas/postImages/MammootyTurbo.jpg";

const PostCard = () => {
  return (
    <>
      <Box className="bg-white w-[65%] rounded-lg shadow-md">
        <Box className="flex p-3 items-center gap-2">
          <UserProfilePlaceholder h="2.5rem" w="2.5rem" iconHeight="2rem" />
          <Box className="flex justify-center  flex-col">
            <Box className="flex gap-1">
              <p className="font-medium">Dulquer Salmaan</p>
              <p className="font-light">is with</p>
              <p className="font-medium">Mammootty</p>
            </Box>
            <p className="font-thin text-xs">20 hours ago</p>
          </Box>
        </Box>
        <Box className="px-3 flex gap-1">
          <p className="font-medium text-blue-400 ">#Turbo</p>
          <p className="font-medium">In Cinemas Worldwide On May 23 , 2024</p>
        </Box>
        <Box>
          <img className="w-full" src={MammmoottyTurboImage} />
        </Box>
      </Box>
    </>
  );
};

export default PostCard;
