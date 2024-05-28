import * as React from "react";

import { Box } from "@mui/material";
import CommonPopupCard from "../../../components/commonPopupCard/commonPopupCard";
import { TbGridDots } from "react-icons/tb";
import { RiMessengerFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import UserProfilePlaceholder from "../../../components/userProfilePlaceholder/userProfilePlaceholder";
import ButtonWrapper from "./components/buttonWrapper";
import MessengerPopTemplate from "../../../views/popups/navbarPopupTemplates/messenger/messengerPopTemplate";

const PopupSection = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [type, setType] = React.useState("");

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleTemplate = (type: string) => {
    switch (type) {
      case "messenger":
        return <MessengerPopTemplate />;
      case "notification":
        return <>Notification</>;
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    type: string
  ) => {
    setAnchorEl(event.currentTarget);
    setType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // test useEffect
  React.useEffect(() => {
    console.log(anchorEl);
  }, [anchorEl]);

  return (
    <>
      <Box className="w-full flex justify-end items-center gap-2 px-3">
        <ButtonWrapper
          height="70%"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleClick(e, "")
          }
        >
          <TbGridDots fontSize="1.5rem" />
        </ButtonWrapper>
        <ButtonWrapper
          height="70%"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleClick(e, "messenger")
          }
        >
          <RiMessengerFill
            className={`${type === "messenger" && "text-blue-600"}`}
            fontSize="1.5rem"
          />
        </ButtonWrapper>
        <ButtonWrapper
          height="70%"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleClick(e, "notification")
          }
        >
          <IoNotifications
            className={`${type === "notification" && "text-blue-600"}`}
            fontSize="1.5rem"
          />
        </ButtonWrapper>
        <UserProfilePlaceholder h="70%" w="2.5rem" iconHeight="2rem" />
        <CommonPopupCard id={id} anchorEl={anchorEl} handleClose={handleClose}>
          {handleTemplate(type)}
        </CommonPopupCard>
      </Box>
    </>
  );
};

export default PopupSection;
