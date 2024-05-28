import { Box } from "@mui/material";
import ChatHead from "./chatHead";
import ChatList from "./chatList";

const MessengerPopTemplate = () => {
  return (
    <>
      <Box className="min-w-[350px]">
        <ChatHead />
        <Box className="overflow-auto overflow-x-hidden">
          <ChatList />
        </Box>
      </Box>
    </>
  );
};

export default MessengerPopTemplate;
