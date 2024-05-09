import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import VideogameAssetRoundedIcon from "@mui/icons-material/VideogameAssetRounded";

const mappingData = {
  menuItems: [
    {
      id: 1,
      name: "Home",
      icon: <HomeRoundedIcon className="bg-inherit" />,
    },
    {
      id: 2,
      name: "Video",
      icon: <OndemandVideoRoundedIcon className="bg-inherit" />,
    },
    {
      id: 3,
      name: "Groups",
      icon: <GroupsRoundedIcon className="bg-inherit" />,
    },
    {
      id: 4,
      name: "Gaming",
      icon: <VideogameAssetRoundedIcon className="bg-inherit" />,
    },
  ],
};

export default mappingData;
