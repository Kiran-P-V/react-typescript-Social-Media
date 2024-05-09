import { Box, Collapse, Divider, Typography } from "@mui/material";
import { useState } from "react";
import menuItems from "../menuItems";
import { IoIosArrowDown } from "react-icons/io";
import MenuItemWrapper from "../../../components/menuItemWrapper/menuItemWrapper";

const LeftMenu = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Box className="pt-2 pl-2 font-medium ">
        {menuItems?.leftMenuMainItems?.map((items) => (
          <MenuItemWrapper>
            <Box>{items?.icon}</Box>
            <Box>{items?.name}</Box>
          </MenuItemWrapper>
        ))}

        {!expanded && (
          <MenuItemWrapper onClick={() => setExpanded(!expanded)}>
            <Box className="bg-gray-300 rounded-full flex justify-center items-center h-[1.5rem] w-[1.5rem]">
              <IoIosArrowDown />
            </Box>
            <Box>See More</Box>
          </MenuItemWrapper>
        )}
        <Collapse in={expanded} timeout={300}>
          {menuItems?.leftMenuCollapseItems?.map((items) => (
            <MenuItemWrapper>
              <Box>{items?.icon}</Box>
              <Box>{items?.name}</Box>
            </MenuItemWrapper>
          ))}
        </Collapse>
        {expanded && (
          <MenuItemWrapper onClick={() => setExpanded(!expanded)}>
            <Box className="bg-gray-300 rounded-full flex justify-center items-center h-[1.5rem] w-[1.5rem]">
              <IoIosArrowDown />
            </Box>
            <Box>See Less</Box>
          </MenuItemWrapper>
        )}
      </Box>

      <Box className="pt-2 pl-2 ">
        <Divider />
      </Box>
      <Box className="pt-2 pl-2 font-medium">
        <p className="font-semibold text-lg text-gray-500 mx-3">
          Your shortcuts
        </p>
        {menuItems?.leftMenuShortcutItems?.map((items) => (
          <MenuItemWrapper>
            <Box>{items?.icon}</Box>
            <Box>{items?.name}</Box>
          </MenuItemWrapper>
        ))}
      </Box>
    </>
  );
};

export default LeftMenu;
