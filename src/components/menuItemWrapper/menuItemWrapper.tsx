import { Box } from "@mui/material";

type wrapperTypes = {
  children: any;
  onClick?: any;
  className?: string;
  h?: string;
  hoverDensity?: string;
};

const MenuItemWrapper = ({
  children,
  onClick,
  className,
  h,
  hoverDensity,
}: wrapperTypes) => {
  return (
    <>
      <Box
        onClick={onClick}
        className={`${h ? h : "h-11"} w-full ${
          hoverDensity ? hoverDensity : "hover:bg-gray-200"
        } flex items-center  gap-2 mx-1 rounded-md px-2 cursor-pointer ${className}`}
      >
        {children}
      </Box>
    </>
  );
};

export default MenuItemWrapper;
