import { Box } from "@mui/material";
import { HiMiniUser } from "react-icons/hi2";

type placeholderProp = {
  h: string;
  w: string;
  iconHeight: string;
};
const UserProfilePlaceholder = ({ h, w, iconHeight }: placeholderProp) => {
  return (
    <>
      <Box
        sx={{ height: h, width: w }}
        className="bg-[#BFC2C6] rounded-full flex justify-center items-center hover:bg-gray-300"
      >
        <HiMiniUser fontSize={iconHeight} color="white" />
      </Box>
    </>
  );
};

export default UserProfilePlaceholder;
