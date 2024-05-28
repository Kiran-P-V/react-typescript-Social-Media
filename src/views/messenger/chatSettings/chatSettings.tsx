import { Box } from "@mui/material";
import UserProfilePlaceholder from "../../../components/userProfilePlaceholder/userProfilePlaceholder";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ButtonWrapper from "../../../layouts/navbar/popupSection/components/buttonWrapper";
import CustomAccordion from "../../../components/customAccordion/customAccordion";

const ChatSettings = () => {
  const accordionData = [
    { id: 1, title: "Customize chat", children: <p>child 1</p> },
    { id: 2, title: "Media, files and links", children: <p>child 2</p> },
    { id: 3, title: "Privacy & support", children: <p>child 3</p> },
  ];

  return (
    <>
      <Box className="p-2 flex flex-col gap-5">
        <Box className="flex justify-center flex-col items-center">
          <UserProfilePlaceholder
            h="4.5rem"
            w="4.5rem"
            iconHeight="3.5rem"
            // image={items?.icon}
          />
          <p className="font-semibold text-lg">Sree Hari</p>
          <p className="font-normal text-gray-500 text-xs">Active 1h ago</p>
        </Box>
        <Box className="flex flex-col gap-1">
          <Box className="flex h-10 justify-center gap-6">
            <ButtonWrapper height="20rem">
              <AccountCircleRoundedIcon />
            </ButtonWrapper>
            <ButtonWrapper height="20rem">
              <NotificationsRoundedIcon />
            </ButtonWrapper>
            <ButtonWrapper height="20rem">
              <SearchRoundedIcon />
            </ButtonWrapper>
          </Box>
          <Box className="flex h-10 justify-center gap-8">
            <p className="font-normal text-gray-500 text-xs">Profile</p>
            <p className="font-normal text-gray-500 text-xs">Mute</p>
            <p className="font-normal text-gray-500 text-xs">Search</p>
          </Box>
        </Box>
        <Box>
          <CustomAccordion data={accordionData} />
        </Box>
      </Box>
    </>
  );
};

export default ChatSettings;
