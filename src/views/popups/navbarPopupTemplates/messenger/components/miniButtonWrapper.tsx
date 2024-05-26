import { Box } from "@mui/material";
type wrapperProps = {
  onClick?: any;
  children: any;
};
const MiniButtonWrapper = ({ onClick, children }: wrapperProps) => {
  return (
    <>
      <Box
        onClick={onClick}
        className="h-7 w-7 hover:bg-gray-100 rounded-full flex justify-center items-center"
      >
        {children}
      </Box>
    </>
  );
};

export default MiniButtonWrapper;
