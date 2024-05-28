import { Box } from "@mui/material";
import UserProfilePlaceholder from "../../../components/userProfilePlaceholder/userProfilePlaceholder";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import DuoRoundedIcon from "@mui/icons-material/DuoRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import GifIcon from "@mui/icons-material/Gif";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Chat from "./chat/chat";

const ChatContent = () => {
  return (
    <>
      <Box className="h-[9vh] flex justify-between items-center px-3 border-r-2 border-l-2 shadow-md">
        <Box className="flex justify-center items-center gap-2">
          <UserProfilePlaceholder
            online={true}
            h="2.5rem"
            w="2.5rem"
            iconHeight="3.5rem"
            // image={items?.icon}
          />
          <Box>
            <p className="font-semibold">Sree Hari</p>
            <p className="text-xs text-gray-600">Active Now</p>
          </Box>
        </Box>
        <Box className="flex gap-3">
          <CallRoundedIcon className="text-[#0084FF]" />
          <DuoRoundedIcon className="text-[#0084FF]" />
          <InfoRoundedIcon className="text-[#0084FF]" />
        </Box>
      </Box>
      <Box className="h-[73vh] overflow-scroll overflow-x-hidden">
        <Chat />
      </Box>
      <Box className="h-[8vh] border-t-2 border-r-2 flex justify-center items-center gap-2 font-semibold px-2">
        <Box className="flex gap-3">
          <AddCircleRoundedIcon className="text-[#0084FF]" />
          <CollectionsRoundedIcon className="text-[#0084FF]" />
          <LocalFireDepartmentRoundedIcon className="text-[#0084FF]" />
          <GifIcon className="text-[#0084FF]" />
        </Box>
        <input
          placeholder="Aa"
          className="rounded-full bg-gray-100 h-[70%] w-[100%] px-4 outline-none"
        />
        <ThumbUpAltIcon className="text-[#0084FF]" />
      </Box>
    </>
  );
};

export default ChatContent;
