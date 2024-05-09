import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

type popupProps = {
  id: string | undefined;
  anchorEl: any;
  handleClose: any;
  children: any;
};

const CommonPopupCard = ({
  id,
  anchorEl,
  handleClose,
  children,
}: popupProps) => {
  const open = Boolean(anchorEl);

  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          {children ? children : "The content of the Popover."}
        </Typography>
      </Popover>
    </>
  );
};

export default CommonPopupCard;
