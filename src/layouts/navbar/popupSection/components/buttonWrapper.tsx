import { Box } from "@mui/material";
type buttonProps = {
  onClick?: any;
  children: JSX.Element;
};
const ButtonWrapper = ({ onClick, children }: buttonProps) => {
  return (
    <>
      <Box
        onClick={onClick}
        className="bg-[#f0f2f5] rounded-full h-[70%] w-10 flex justify-center items-center hover:bg-gray-200 cursor-pointer"
      >
        {children}
      </Box>
    </>
  );
};

export default ButtonWrapper;
