import  React ,{useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const BasicAccordion = ({ head, info }) => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion expanded={expanded}
       onChange={handleAccordionChange}className='w-full bg-transparent border-b border-[#ec9823] bg_transparent'>
        <AccordionSummary
          expandIcon={expanded ? <RemoveIcon  className='text-[#BC955A] text__color text-lg bg_transparent  md:text-4xl font-semibold bg-transparent'/> : <AddIcon className='text-[#BC955A] text-[20px] md:text-4xl font-semibold' />}
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-[#BC955A] bg_transparent text__colortext-[15px] md:text-2xl font-semibold w-full md:mx-8 ">{head}</Typography>
        </AccordionSummary>
        <AccordionDetails className='border-t border-[#ec9823] bg_transparent '>
          <Typography className='text-[12px] md:text-xl text-white md:mx-8 py-2 md:py-10 bg_transparent'>{info}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BasicAccordion;
