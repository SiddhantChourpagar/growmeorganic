
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


export default function BasicAccordion() {
  return (
    <div>
      <Accordion>

        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >

          <Typography>➕  Department</Typography>

        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Customer service
          </Typography>
          <Accordion>
            <AccordionSummary>
              <Typography>
              ➕ Sub Department
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                support
              </Typography>
              <Typography>
                Customer success
              </Typography>
            </AccordionDetails>
          </Accordion>
            
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>➕ Department</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            design
          </Typography>
          <Accordion>
            <AccordionSummary>
            <Typography>
            ➕ sub department
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                graphic_design
              </Typography>
              <Typography>
                product_design
              </Typography>
              <Typography>
              web_design
              </Typography>
            </AccordionDetails>

          </Accordion>
        </AccordionDetails>
      </Accordion>


    
    </div>
  );
}
