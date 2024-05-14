import { Avatar, Box } from "@mui/material";
import { HiMiniUser } from "react-icons/hi2";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

type placeholderProp = {
  h: string;
  w: string;
  iconHeight: string;
  online?: boolean;
  image?: string;
};
const UserProfilePlaceholder = ({
  h,
  w,
  iconHeight,
  online,
  image,
}: placeholderProp) => {
  console.log(image);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      // width: "0.1px",
      // height: "0.5rem",
      maxWidth: "0.1px",
      maxHeight: "0.5rem",
    },
  }));
  return (
    <>
      {!online ? (
        <Box
          sx={{ height: h, width: w }}
          className="bg-[#BFC2C6] rounded-full flex justify-center items-center hover:bg-gray-300"
        >
          {!image ? (
            <HiMiniUser fontSize={iconHeight} color="white" />
          ) : (
            <Avatar
              className="max-w-[1.8rem] max-h-[1.8rem]"
              alt="Remy Sharp"
              src={image}
            />
          )}
        </Box>
      ) : (
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Box
            sx={{ height: h, width: w }}
            className="bg-[#BFC2C6] rounded-full flex justify-center items-center hover:bg-gray-300"
          >
            {!image ? (
              <HiMiniUser fontSize={iconHeight} color="white" />
            ) : (
              <Avatar
                className="max-w-[1.8rem] max-h-[1.8rem]"
                alt="Remy Sharp"
                src={image}
              />
            )}
          </Box>
        </StyledBadge>
      )}
    </>
  );
};

export default UserProfilePlaceholder;
