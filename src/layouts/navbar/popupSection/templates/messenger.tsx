import { Box } from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import AllOutRoundedIcon from "@mui/icons-material/AllOutRounded";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import MenuItemWrapper from "../../../../components/menuItemWrapper/menuItemWrapper";
import menuItems from "../../../../views/home/menuItems";
import UserProfilePlaceholder from "../../../../components/userProfilePlaceholder/userProfilePlaceholder";

const Messenger = () => {
  return (
    <>
      <Box className="min-w-[350px]">
        <Box className="flex justify-around p-3">
          <Box>
            <p className="text-2xl font-bold">Chats</p>
          </Box>
          <Box className="w-full flex justify-end items-center gap-2">
            <Box className="h-7 w-7 hover:bg-gray-300 rounded-full flex justify-center items-center">
              <MoreHorizRoundedIcon
                className="cursor-pointer text-gray-500"
                fontSize="small"
              />
            </Box>
            <Box className="h-7 w-7 hover:bg-gray-300 rounded-full flex justify-center items-center">
              <AllOutRoundedIcon
                className="cursor-pointer text-gray-500"
                fontSize="small"
              />
            </Box>
            <Box className="h-7 w-7 hover:bg-gray-300 rounded-full flex justify-center items-center">
              <MapsUgcRoundedIcon
                className="cursor-pointer text-gray-500"
                fontSize="small"
              />
            </Box>
          </Box>
        </Box>
        <Box className="h-12 mt-3 px-2">
          <input
            placeholder="Search Messenger"
            className="rounded-full bg-gray-100 h-[70%] w-[100%] px-4 outline-none"
          />
        </Box>
        <Box className="h-12 mt-3 flex gap-2 font-bold px-2">
          <Box className="rounded-3xl h-10 text-blue-600 bg-blue-100 flex justify-center items-center px-2 text-sm">
            Inbox
          </Box>
          <Box className="rounded-3xl h-10 hover:bg-gray-100 flex justify-center items-center p-2 text-sm">
            Communities
          </Box>
        </Box>
        <Box className="overflow-auto overflow-x-hidden">
          {menuItems?.messengerItems?.map((items) => (
            <MenuItemWrapper hoverDensity="hover:bg-gray-100" h="h-[70px]">
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
                <Box className="text-xs">
                  {items?.name} sent a voice message
                </Box>
              </Box>
            </MenuItemWrapper>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Messenger;
