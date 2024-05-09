import { Box, Grid } from "@mui/material";
import LeftMenu from "./leftMenu/leftMenu";
import PostSection from "./postSection/postSection";
import RightMenu from "./rightMenu/rightMenu";

const Home = () => {
  return (
    <>
      <Box className="flex h-full">
        <Grid className="mt-16" container>
          <Grid
            className="overflow-scroll scrollbar-hidden overflow-x-hidden h-[90vh]"
            item
            xs={3}
          >
            <LeftMenu />
          </Grid>
          <Grid
            className="overflow-scroll scrollbar-hidden overflow-x-hidden h-[90vh]"
            item
            xs={6}
          >
            <PostSection />
          </Grid>
          <Grid
            className="overflow-scroll scrollbar-hidden overflow-x-hidden h-[90vh]"
            item
            xs={3}
          >
            <RightMenu />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
