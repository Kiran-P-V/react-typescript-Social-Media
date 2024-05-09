import { Box, Divider } from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import menuItems from "../menuItems";
import MenuItemWrapper from "../../../components/menuItemWrapper/menuItemWrapper";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const RightMenu = () => {
  return (
    <>
      <Box className="pt-2 pl-2 font-medium ">
        <p className="font-semibold text-lg text-gray-500 mx-3 flex justify-between items-center">
          Your Pages and profiles
          <Box className="h-7 w-7 hover:bg-gray-300 rounded-full flex justify-center items-center">
            <MoreHorizRoundedIcon className="cursor-pointer" fontSize="small" />
          </Box>
        </p>
        {menuItems?.rightMenuProfileAndPagesItems?.map((items) => (
          <MenuItemWrapper>
            <Box className="">{items?.icon}</Box>
            <Box className="">{items?.name}</Box>
          </MenuItemWrapper>
        ))}
        <Box className="pt-2 pl-2 ">
          <Divider />
        </Box>
        <p className="font-semibold text-lg text-gray-500 mx-3 flex justify-between items-center">
          Birthdays
        </p>
        {menuItems?.rightMenuBirthdayItems?.map((items) => (
          <MenuItemWrapper>
            <Box className="">{items?.icon}</Box>
            <Box className="">{items?.name}</Box>
          </MenuItemWrapper>
        ))}
        <Box className="pt-2 pl-2 ">
          <Divider />
        </Box>
        <p className="font-semibold text-lg text-gray-500 mx-3 flex justify-between items-center">
          Contacts
          <Box className="w-full flex justify-end items-center">
            <Box className="h-7 w-7 hover:bg-gray-300 rounded-full flex justify-center items-center">
              <SearchRoundedIcon className="cursor-pointer" fontSize="small" />
            </Box>
            <Box className="h-7 w-7 hover:bg-gray-300 rounded-full flex justify-center items-center">
              <MoreHorizRoundedIcon
                className="cursor-pointer"
                fontSize="small"
              />
            </Box>
          </Box>
        </p>
        {menuItems?.rightMenuContactItems?.map((items) => (
          <MenuItemWrapper>
            <Box className="">{items?.icon}</Box>
            <Box className="">{items?.name}</Box>
          </MenuItemWrapper>
        ))}
      </Box>
    </>
  );
};

export default RightMenu;
