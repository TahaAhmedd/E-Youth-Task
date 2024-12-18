import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useCourseProvider from "../hooks/useCourseProvider";

export default function Faqs() {
  const {course} = useCourseProvider();
  return (
    <div className='d-flex flex-column '>
      {course.faqs.map((faq, index) => (
        <Accordion
          key={faq.id}
          defaultExpanded={!index}
          className='rounded-3 overflow-hidden'
          slotProps={{heading: {sx: {fontWeight: "600"}}}}
          sx={{margin: "0 0"}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
            sx={{borderRadius: "10px"}}
          >
            {faq.question}
          </AccordionSummary>
          <AccordionDetails>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
