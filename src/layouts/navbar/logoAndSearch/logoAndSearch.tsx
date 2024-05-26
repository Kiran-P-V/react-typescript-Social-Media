import { Box } from "@mui/material";
import Logo from "../../../assets/logos/MainLogo.jpeg";
import { useNavigate } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";

const LogoAndSearch = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box className="w-full flex items-center px-4 gap-3 ">
        <img
          onClick={() => navigate("/")}
          className="w-10 h-10 cursor-pointer"
          src={Logo}
        />
        <input
          placeholder="Search Facebook"
          className="rounded-full bg-gray-100 h-[70%] w-[50%] px-4 outline-none"
        />
      </Box>
    </>
  );
};

export default LogoAndSearch;
