import { Avatar, AvatarGroup, Box, Divider } from "@mui/material";
import UserProfilePlaceholder from "../../../../components/userProfilePlaceholder/userProfilePlaceholder";
import MammmoottyTurboImage from "../../../../assets/dummyDatas/postImages/MammootyTurbo.jpg";
import MiniLikeIcon from "../../../../assets/icons/MinifacebookLikeIcon.png";
import MiniLoveIcon from "../../../../assets/icons/MinifacebookLove.png";
import MiniCommentIcon from "../../../../assets/icons/MiniCommentIcon.png";
import MiniForwardIcon from "../../../../assets/icons/MiniForwardIcon.png";
import LikeIcon from "../../../../assets/icons/FacebookLike.png";
import CommentIcon from "../../../../assets/icons/FacebookComment.png";
import ForwardIcon from "../../../../assets/icons/ForwardIcon.png";
import MenuItemWrapper from "../../../../components/menuItemWrapper/menuItemWrapper";

const PostCard = () => {
  return (
    <>
      <Box className="bg-white w-[95%] sm:w-[80%] rounded-lg shadow-md h-full">
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
        <Box className="p-2 flex justify-between px-4">
          <Box className="flex gap-1 w-[80%]">
            <AvatarGroup className="flex gap-1" max={3}>
              <Avatar
                className="max-w-3 max-h-3 bg-sky-500 p-[0.2rem]"
                alt="Remy Sharp"
                src={MiniLikeIcon}
              />
              <Avatar
                className="max-w-3 max-h-3 bg-[#FD6699] p-[0.2rem]"
                alt="Travis Howard"
                src={MiniLoveIcon}
              />
            </AvatarGroup>
            <p className="font-light text-wrap">
              Muhammed Sinan, Shi Hab and 10K others
            </p>
          </Box>
          <Box className="flex justify-around w-[20%] items-center gap-2">
            <Box className="flex items-center gap-1">
              <p className="font-light">10K</p>
              <img src={MiniCommentIcon} className="max-w-4 max-h-4" />
            </Box>
            <Box className="flex items-center gap-1">
              <p className="font-light">10K</p>
              <img src={MiniForwardIcon} className="max-w-4 max-h-4" />
            </Box>
          </Box>
        </Box>
        <Box className="pt-2 pl-2 ">
          <Divider />
        </Box>
        <Box className="flex justify-around p-2 gap-2">
          <MenuItemWrapper className="flex justify-center h-[2rem]">
            <img src={LikeIcon} className="h-7 w-7" />
            <Box>Like</Box>
          </MenuItemWrapper>
          <MenuItemWrapper className="flex justify-center h-[2rem]">
            <img src={CommentIcon} className="h-6 w-6" />
            <Box>Comment</Box>
          </MenuItemWrapper>
          <MenuItemWrapper className="flex justify-center h-[2rem]">
            <img src={ForwardIcon} className="h-6 w-6" />
            <Box>Share</Box>
          </MenuItemWrapper>
        </Box>
      </Box>
    </>
  );
};

export default PostCard;
