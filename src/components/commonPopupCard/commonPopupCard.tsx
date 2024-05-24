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
        className="mt-1 "
        anchorPosition={{ left: 20, top: 20 }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="p-1">
          {children ? children : "The content of the Popover."}
        </div>
      </Popover>
    </>
  );
};

export default CommonPopupCard;
