import { Box, Grid } from "@mui/material";

const MessengerPage = () => {
  return (
    <>
      <Box className="flex h-full">
        <Grid className="mt-16" container>
          <Grid
            className="overflow-scroll scrollbar-hidden overflow-x-hidden h-[90vh]"
            item
            xs={3}
          >
            left
          </Grid>
          <Grid
            className="overflow-scroll scrollbar-hidden overflow-x-hidden h-[90vh]"
            item
            xs={6}
          >
            center
          </Grid>
          <Grid
            className="overflow-scroll scrollbar-hidden overflow-x-hidden h-[90vh]"
            item
            xs={3}
          >
            right
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MessengerPage;
