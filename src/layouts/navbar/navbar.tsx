import { Box } from "@mui/material";
import LogoAndSearch from "./logoAndSearch/logoAndSearch";
import MiddleNav from "./middleNav/middleNav";
import PopupSection from "./popupSection/popupSection";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box className="bg-[#FFFFFF] w-full h-14 shadow-md flex fixed">
        <LogoAndSearch />
        <MiddleNav />
        <PopupSection />
      </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
