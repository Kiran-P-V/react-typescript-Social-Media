import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type props = {
  data: Array<any>;
};

const CustomAccordion = ({ data }: props) => {
  const StyledAccordion = styled(Accordion)(({}) => {
    return {
      boxShadow: "none", // this styles directly apply to accordion
      border: `none`,
      padding: "2px",
      ".MuiAccordionDetails-root": {},
      ".MuiAccordionSummary-root": {
        height: "20px",
        borderRadius: "10px",
        ":hover": {
          background: "rgb(243 244 246 / var(--tw-bg-opacity))",
        },
      },
    };
  });

  return (
    <>
      {data?.map((item, index) => (
        <StyledAccordion key={item?.id || index}>
          <AccordionSummary
            className="hover:bg-gray-300"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>{item?.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item?.children}</Typography>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </>
  );
};

export default CustomAccordion;
