import { Box } from "@mui/material";
import MenuItemWrapper from "../../../../components/menuItemWrapper/menuItemWrapper";
import menuItems from "../../../home/menuItems";
import UserProfilePlaceholder from "../../../../components/userProfilePlaceholder/userProfilePlaceholder";
type props = {
  hoverDensity?: string;
};
const ChatList = ({ hoverDensity }: props) => {
  return (
    <>
      {menuItems?.messengerItems?.map((items) => (
        <MenuItemWrapper
          hoverDensity={hoverDensity ? hoverDensity : "hover:bg-gray-100"}
          h="h-[70px]"
        >
          <Box className="">
            <UserProfilePlaceholder
              online={items?.icon ? true : false}
              h="3.5rem"
              w="3.5rem"
              iconHeight="3.5rem"
              image={items?.icon}
            />
          </Box>
          <Box className="flex flex-col">
            <Box className="font-semibold">{items?.name}</Box>
            <Box className="text-xs text-gray-600 font-semibold">
              {items?.name} sent a voice message
            </Box>
          </Box>
        </MenuItemWrapper>
      ))}
    </>
  );
};

export default ChatList;
