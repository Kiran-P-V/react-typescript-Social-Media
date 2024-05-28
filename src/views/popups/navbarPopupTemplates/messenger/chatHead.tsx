import { Box } from "@mui/material";
import MiniButtonWrapper from "./components/miniButtonWrapper";
import { useNavigate } from "react-router-dom";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import AllOutRoundedIcon from "@mui/icons-material/AllOutRounded";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";

const ChatHead = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box className="flex justify-around p-3">
        <Box>
          <p className="text-2xl font-bold">Chats</p>
        </Box>
        <Box className="w-full flex justify-end items-center gap-2">
          <MiniButtonWrapper>
            <MoreHorizRoundedIcon
              className="cursor-pointer text-gray-500"
              fontSize="small"
            />
          </MiniButtonWrapper>
          <MiniButtonWrapper onClick={() => navigate("/messenger")}>
            <AllOutRoundedIcon
              className="cursor-pointer text-gray-500"
              fontSize="small"
            />
          </MiniButtonWrapper>
          <MiniButtonWrapper>
            <MapsUgcRoundedIcon
              className="cursor-pointer text-gray-500"
              fontSize="small"
            />
          </MiniButtonWrapper>
        </Box>
      </Box>
      <Box className="h-12 px-2">
        <input
          placeholder="Search Messenger"
          className="rounded-full bg-gray-100 h-[70%] w-[100%] px-4 outline-none"
        />
      </Box>
      <Box className="h-12 flex gap-2 font-bold px-2">
        <Box className="rounded-3xl h-10 text-blue-600 bg-blue-100 flex justify-center items-center px-2 text-sm">
          Inbox
        </Box>
        <Box className="rounded-3xl h-10 hover:bg-gray-100 flex justify-center items-center p-2 text-sm">
          Communities
        </Box>
      </Box>
    </>
  );
};

export default ChatHead;
