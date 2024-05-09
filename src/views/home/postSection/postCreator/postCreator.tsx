import { Box, Divider } from "@mui/material";
import UserProfilePlaceholder from "../../../../components/userProfilePlaceholder/userProfilePlaceholder";
import menuItems from "../../menuItems";
import MenuItemWrapper from "../../../../components/menuItemWrapper/menuItemWrapper";

const PostCreator = () => {
  return (
    <>
      <Box className="bg-white w-[65%] h-32 rounded-lg shadow-md px-3">
        <Box className="flex w-full h-[49%] justify-center items-center gap-2">
          <UserProfilePlaceholder h="63%" w="2.5rem" iconHeight="2rem" />
          <input
            placeholder="Whats's on your mind"
            className="rounded-full bg-gray-200 h-[60%] w-[85%] px-4"
          />
        </Box>
        <Box className="w-full h-[2%]">
          <Divider />
        </Box>
        <Box className="w-full h-[49%] flex justify-around items-center">
          {menuItems?.middlePostCreatorItems?.map((items) => (
            <MenuItemWrapper className="justify-center">
              <Box>{items?.icon}</Box>
              <Box>{items?.name}</Box>
            </MenuItemWrapper>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default PostCreator;
