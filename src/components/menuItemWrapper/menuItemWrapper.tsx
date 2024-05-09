import { Box } from "@mui/material";

type wrapperTypes = {
  children: any;
  onClick?: any;
  className?: string;
};

const MenuItemWrapper = ({ children, onClick, className }: wrapperTypes) => {
  return (
    <>
      <Box
        onClick={onClick}
        className={`h-11 w-full  flex items-center hover:bg-[#E4E6E9] gap-2 mx-1 rounded-md px-2 cursor-pointer ${className}`}
      >
        {children}
      </Box>
    </>
  );
};

export default MenuItemWrapper;
