import * as React from "react";

import { Box } from "@mui/material";
import CommonPopupCard from "../../../components/commonPopupCard/commonPopupCard";
import { TbGridDots } from "react-icons/tb";
import { RiMessengerFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { HiMiniUser } from "react-icons/hi2";
import UserProfilePlaceholder from "../../../components/userProfilePlaceholder/userProfilePlaceholder";

const PopupSection = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            Open Popover
          </Button> */}
      <Box className="w-full flex justify-end items-center gap-2 px-3">
        <Box className="bg-[#f0f2f5] rounded-full h-[70%] w-10 flex justify-center items-center hover:bg-gray-200">
          <TbGridDots fontSize="1.5rem" />
        </Box>
        <Box className="bg-[#f0f2f5] rounded-full h-[70%] w-10 flex justify-center items-center hover:bg-gray-200">
          <RiMessengerFill fontSize="1.5rem" />
        </Box>
        <Box className="bg-[#f0f2f5] rounded-full h-[70%] w-10 flex justify-center items-center hover:bg-gray-200">
          <IoNotifications fontSize="1.5rem" />
        </Box>
        <UserProfilePlaceholder h="70%" w="2.5rem" iconHeight="2rem" />
        <CommonPopupCard id={id} anchorEl={anchorEl} handleClose={handleClose}>
          {null}
        </CommonPopupCard>
      </Box>
    </>
  );
};

export default PopupSection;
