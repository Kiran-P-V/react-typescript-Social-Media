import { Avatar, Box } from "@mui/material";
import { HiMiniUser } from "react-icons/hi2";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

type PlaceholderProps = {
  h: string;
  w: string;
  iconHeight: string;
  online?: boolean;
  image?: string;
  profileHeight?: string;
  profileWidth?: string;
};

const UserProfilePlaceholder = ({
  h,
  w,
  profileHeight,
  profileWidth,
  iconHeight,
  online,
  image,
}: PlaceholderProps) => {
  const PlaceholderIcon = <HiMiniUser fontSize={iconHeight} color="white" />;

  const PlaceholderAvatar = (
    <img
      style={{ minHeight: profileHeight, minWidth: profileWidth }}
      className={`rounded-full`}
      alt="User"
      src={image}
    />
  );

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      maxWidth: "0.1px",
      maxHeight: "0.5rem",
    },
  }));

  const placeholderContent = (
    <Box
      sx={{ height: h, width: w }}
      className="bg-[#BFC2C6] rounded-full flex justify-center items-center hover:bg-gray-300"
    >
      {!image ? PlaceholderIcon : PlaceholderAvatar}
    </Box>
  );

  return (
    <>
      {!online ? (
        placeholderContent
      ) : (
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          {placeholderContent}
        </StyledBadge>
      )}
    </>
  );
};

export default UserProfilePlaceholder;
