import UserProfilePlaceholder from "../../components/userProfilePlaceholder/userProfilePlaceholder";
import FriendsIcon from "../../assets/icons/leftMenuIcons/friends.png";
import MemoriesIcon from "../../assets/icons/leftMenuIcons/memories.png";
import SavedIcon from "../../assets/icons/leftMenuIcons/saved.png";
import GroupsIcon from "../../assets/icons/leftMenuIcons/groups.png";
import MarketplaceIcon from "../../assets/icons/leftMenuIcons/marketplace.png";
import FeedsIcon from "../../assets/icons/leftMenuIcons/feeds.png";
import VideoIcon from "../../assets/icons/leftMenuIcons/video.png";
import AdManagerIcon from "../../assets/icons/leftMenuIcons/Ads manager.png";
import ClimateScienceCenter from "../../assets/icons/leftMenuIcons/climate sceience center.png";
import EventsIcon from "../../assets/icons/leftMenuIcons/events.png";
import FacebookPayIcon from "../../assets/icons/leftMenuIcons/facebook pay.png";
import FundraisersIcon from "../../assets/icons/leftMenuIcons/fundraisers.png";
import GamingVideoIcon from "../../assets/icons/leftMenuIcons/gaming video.png";
import MessengerIcon from "../../assets/icons/leftMenuIcons/messenger.png";
import MessengerKidsIcon from "../../assets/icons/leftMenuIcons/messenger kids.png";
import PagesIcon from "../../assets/icons/leftMenuIcons/pages.png";
import PlayGamesIcon from "../../assets/icons/leftMenuIcons/play games.png";
import RecentAdActivityIcon from "../../assets/icons/leftMenuIcons/recent ad activity.png";
import GiftIcon from "../../assets/icons/rightMenuIcons/giftIcon.png";
import LiveVideoIcon from "../../assets/icons/middleSectionIcons/LiveVideo.png";
import PhotoOrVideoIcon from "../../assets/icons/middleSectionIcons/photoOrVideo.png";
import FeelingOrActivityIcon from "../../assets/icons/middleSectionIcons/FeelingOrActivity.png";
import profile1 from "../../assets/dummyDatas/ProfileImages/profile1.jpg";
import Profile2 from "../../assets/dummyDatas/ProfileImages/Profile2.jpg";

const menuItems = {
  leftMenuMainItems: [
    {
      id: 1,
      name: "Kiran Pv",
      icon: <UserProfilePlaceholder h="50%" w="1.6rem" iconHeight="1.6rem" />,
    },
    {
      id: 2,
      name: "Friends",
      icon: <img src={FriendsIcon} className="h-6" />,
    },
    {
      id: 3,
      name: "Memories",
      icon: <img src={MemoriesIcon} className="h-6" />,
    },
    {
      id: 4,
      name: "Saved",
      icon: <img src={SavedIcon} className="h-6" />,
    },
    {
      id: 5,
      name: "Groups",
      icon: <img src={GroupsIcon} className="h-6" />,
    },
    {
      id: 6,
      name: "Marketplace",
      icon: <img src={MarketplaceIcon} className="h-6" />,
    },
    {
      id: 7,
      name: "Feeds",
      icon: <img src={FeedsIcon} className="h-6" />,
    },
    {
      id: 8,
      name: "Video",
      icon: <img src={VideoIcon} className="h-6" />,
    },
  ],
  leftMenuCollapseItems: [
    {
      id: 1,
      name: "Ads Manager",
      icon: <img src={AdManagerIcon} className="h-6" />,
    },
    {
      id: 2,
      name: "Climate Science Center",
      icon: <img src={ClimateScienceCenter} className="h-6" />,
    },
    {
      id: 3,
      name: "Events",
      icon: <img src={EventsIcon} className="h-6" />,
    },
    {
      id: 4,
      name: "Facebook Pay",
      icon: <img src={FacebookPayIcon} className="h-6" />,
    },
    {
      id: 5,
      name: "Fundraisers",
      icon: <img src={FundraisersIcon} className="h-6" />,
    },
    {
      id: 6,
      name: "Gaming Video",
      icon: <img src={GamingVideoIcon} className="h-6" />,
    },
    {
      id: 7,
      name: "Messenger",
      icon: <img src={MessengerIcon} className="h-6" />,
    },
    {
      id: 8,
      name: "Messenger Kids",
      icon: <img src={MessengerKidsIcon} className="h-6" />,
    },
    {
      id: 9,
      name: "Pages",
      icon: <img src={PagesIcon} className="h-6" />,
    },
    {
      id: 10,
      name: "Play Games",
      icon: <img src={PlayGamesIcon} className="h-6" />,
    },
    {
      id: 11,
      name: "Recent Ad activity",
      icon: <img src={RecentAdActivityIcon} className="h-6" />,
    },
  ],
  leftMenuShortcutItems: [
    {
      id: 1,
      name: "Gurukulam Store",
      icon: <UserProfilePlaceholder h="50%" w="1.6rem" iconHeight="1.6rem" />,
    },
    {
      id: 2,
      name: "Rugby Gaming",
      icon: <UserProfilePlaceholder h="50%" w="1.6rem" iconHeight="1.6rem" />,
    },
    {
      id: 3,
      name: "Something FISHY",
      icon: <UserProfilePlaceholder h="50%" w="1.6rem" iconHeight="1.6rem" />,
    },
  ],
  rightMenuProfileAndPagesItems: [
    {
      id: 1,
      name: "Rugby Gaming",
      icon: <UserProfilePlaceholder h="50%" w="1.6rem" iconHeight="1.6rem" />,
    },
  ],
  rightMenuBirthdayItems: [
    {
      id: 1,
      name: "Eli Cole is Celebrating their birthday",
      icon: <img src={GiftIcon} className="h-6" />,
    },
  ],
  rightMenuContactItems: [
    {
      id: 1,
      name: "Nivin Narayan",
      icon: "",
    },
    {
      id: 2,
      name: "Shrey Saxena",
      icon: profile1,
    },
    {
      id: 3,
      name: "Raquel S",
      icon: "",
    },
    {
      id: 4,
      name: "Anwer Muh'd",
      icon: "",
    },
    {
      id: 5,
      name: "Sarah Jacob",
      icon: "",
    },
    {
      id: 6,
      name: "Aleena Thomas",
      icon: "",
    },
    {
      id: 7,
      name: "Angela S",
      icon: "",
    },
    {
      id: 8,
      name: "Andriya Ben",
      icon: "",
    },
    {
      id: 8,
      name: "Jonathan",
      icon: Profile2,
    },
    {
      id: 7,
      name: "Reena Gomaz",
      icon: "",
    },
  ],
  middlePostCreatorItems: [
    {
      id: 1,
      name: "Live video",
      icon: <img src={LiveVideoIcon} className="h-5 min-w-fit" />,
    },
    {
      id: 2,
      name: "Photo/video",
      icon: <img src={PhotoOrVideoIcon} className="h-6 min-w-fit" />,
    },
    {
      id: 3,
      name: "Feeling/activity",
      icon: <img src={FeelingOrActivityIcon} className="h-5 min-w-fit" />,
    },
  ],
  messengerItems: [
    {
      id: 1,
      name: "Nivin Narayan",
      icon: "",
    },
    {
      id: 2,
      name: "Shrey Saxena",
      icon: profile1,
    },
    {
      id: 3,
      name: "Raquel S",
      icon: "",
    },
    {
      id: 4,
      name: "Anwer Muh'd",
      icon: "",
    },
    {
      id: 5,
      name: "Sarah Jacob",
      icon: "",
    },
    {
      id: 8,
      name: "Jonathan",
      icon: Profile2,
    },
    {
      id: 6,
      name: "Aleena Thomas",
      icon: "",
    },
    {
      id: 7,
      name: "Angela S",
      icon: "",
    },
    {
      id: 8,
      name: "Andriya Ben",
      icon: "",
    },
    {
      id: 7,
      name: "Reena Gomaz",
      icon: "",
    },
  ],
};

export default menuItems;
