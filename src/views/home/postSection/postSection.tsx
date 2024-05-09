import { Box } from "@mui/material";
import StorySlider from "./storySlider/storySlider";
import PostCreator from "./postCreator/postCreator";
import PostCard from "./postCard/postCard";

const PostSection = () => {
  return (
    <>
      <Box className="flex justify-center pt-4 ">
        <StorySlider />
      </Box>
      <Box className="flex justify-center mt-5">
        <PostCreator />
      </Box>
      <Box className="flex justify-center mt-5">
        <PostCard />
      </Box>
    </>
  );
};

export default PostSection;
