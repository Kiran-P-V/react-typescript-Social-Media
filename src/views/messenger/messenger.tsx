import { Box, Grid } from "@mui/material";
import ChatList from "../popups/navbarPopupTemplates/messenger/chatList";
import ChatHead from "../popups/navbarPopupTemplates/messenger/chatHead";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import ChatContent from "./chatContent/chatContent";
import ChatSettings from "./chatSettings/chatSettings";

const MessengerPage = () => {
  return (
    <>
      <Box className="flex h-full bg-white">
        <Grid className="mt-16" container>
          <Grid item xs={3}>
            <Box className="h-[22vh]">
              <ChatHead />
            </Box>
            <Box className="h-[60vh] overflow-scroll overflow-x-hidden">
              <ChatList />
            </Box>
            <Box className="h-[8vh] border-t-2 border-r-2 flex justify-center items-center gap-2 font-semibold">
              <SystemUpdateAltIcon fontSize="small" />
              Try Messenger for Windows
            </Box>
          </Grid>
          <Grid
            className="overflow-scroll scrollbar-hidden overflow-x-hidden h-[90vh]"
            item
            xs={6}
          >
            <ChatContent />
          </Grid>
          <Grid
            className="overflow-scroll scrollbar-hidden overflow-x-hidden h-[90vh]"
            item
            xs={3}
          >
            <ChatSettings />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MessengerPage;
