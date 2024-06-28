import { Box, Grid } from "@mui/material";
import LeftMenu from "./leftMenu/leftMenu";
import PostSection from "./postSection/postSection";
import RightMenu from "./rightMenu/rightMenu";
import useMediaQuery from "@mui/material/useMediaQuery";

const Home = () => {
  const matchesMd = useMediaQuery("(min-width:1100px)");
  const matchesSm = useMediaQuery("(min-width:900px)");

  return (
    <>
      <Box className="flex h-full justify-center items-center">
        <Grid className="mt-16" container>
          {matchesMd && (
            <Grid
              className="overflow-scroll scrollbar-hidden overflow-x-hidden h-[90vh]"
              item
              xs={3}
            >
              <LeftMenu />
            </Grid>
          )}
          <Grid
            className="overflow-scroll scrollbar-hidden overflow-x-hidden h-[90vh]"
            item
            xs={!matchesSm ? 12 : !matchesMd ? 8 : 6}
          >
            <PostSection />
          </Grid>
          {matchesSm && (
            <Grid
              className="overflow-scroll scrollbar-hidden overflow-x-hidden h-[90vh]"
              item
              xs={3}
            >
              <RightMenu />
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
