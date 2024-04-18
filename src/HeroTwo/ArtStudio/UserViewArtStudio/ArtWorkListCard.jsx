import React from 'react'
import {Accordion,AccordionSummary,AccordionDetails} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import style from "./index.module.css";
import image from "../../../assets/images/boy.png"
import LocalAtmIcon from '@mui/icons-material/LocalAtm'


const ArtWorkListCard = () => {
  return (
    <Accordion style={{backgroundColor:"white"}} >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
     <div className={style.accordion}>
       <div style={{display:"flex",alignItems:"center"}}>
         <img style={{with:"200px",height:"800px"}} src={image} alt="" />
         <div className={style.details}>
             <p style={{fontSize:"3.0rem",fontWeight:"1000"}}>
              
               Name: <span>Work Of Art</span> 
             </p>
             <p>
               Price: <span>₦</span><span>25000</span> 
             </p>
             <p>
              Genre: <span>Art painting</span>
             </p>
             
         </div>
       </div>
     </div>
    </AccordionSummary>
    <AccordionDetails>
      <p style={{color:"rgb(68, 71, 70)",fontWeight:"1000"}}>ARTWORK DESCRIPTION</p>
     <h3 style={{color:"rgb(68, 71, 70)"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel magna nec massa mattis semper. Sed commodo urna vel enim suscipit, at ultricies velit tempus. Duis et fermentum lorem. Proin ut arcu tellus. Integer quis ex eget nisl iaculis eleifend. Maecenas rhoncus urna ac nunc ultrices, vel malesuada justo pellentesque. Vivamus consequat felis non quam aliquet, ac cursus ligula lobortis. Sed at metus non elit iaculis fringilla. Suspendisse potenti. Ut nec ante in lorem dictum auctor eget eget nunc. Vivamus eu velit a nisl condimentum pellentesque. Sed at turpis nec nulla dapibus mattis. Cras eu mauris vitae dolor rhoncus auctor. Suspendisse potenti. Donec interdum, ligula id venenatis molestie, velit mauris dictu </h3> 
     <div style={{marginTop:"80px"}}>
      <Button sx={{backgroundColor:"rgb(68, 71, 70)",color:"white",fontSize:"2.0rem",padding:"20px"}} variant='contained' disabled={false} type="submit">
            {true?"Add to Cart":"Out of Stock"}
      </Button>
     </div>
    </AccordionDetails>
  </Accordion>
  )
}

export default ArtWorkListCard