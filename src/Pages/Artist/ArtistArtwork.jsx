import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup,IconButton } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import style from "./Artist.module.css"
// import { CheckBox } from '@mui/icons-material'
import Typography from '@mui/material/Typography';


const mediums=[
  {
    artwork:"Painting",
    mediums:[
      "Oil painting",
      "Acrylic paint",
      "WaterColor",
      "Gouche",
      "Tempera"
    ],
    
  },
  {
    artwork:"Drawing",
    mediums:[
      "Pencil",
      "Charcoal",
      "ink",
      "Pastels",
    ],


    
  },
  {
   artwork:"Photography",
    mediums:[
      " Digital photography",
      "Digital Painting",
    ]
  },
  {
   artwork:"Mixed Media",
    mediums:[
      "Shattered glass artwork",
      "Digital Painting",
      "Collage"
    ],
  }
]

const ArtistArtwork = () => {
  const handleCheckBoxChange = (value)=>{
    console.log("value")
  }
  return (
    <Accordion>
      <AccordionSummary
      // expandIcon={<ExpandMoreIcon/>}
      expandIcon={<IconButton style={{ color: 'red' }}><ExpandMoreIcon /></IconButton>}
      aria-controls='panel1-content'
      id="panel1-header"
      sx={{backgroundColor: "black"}}
      
      >
        <div className={style.accord}>

          <div className={style.accord1}>
            <img 
            className={style.accord2}
            src='https://cdn-v2.theculturetrip.com/1200x675/wp-content/uploads/2018/10/rsz_the_value_of_nothing_i_2018.webp' 
            alt=''/>
            <div>
            <p className={style.semi}>Serenity in Blue</p>
                <p className={style.span}>Price: ₦<span>499</span></p>
                <p className={style.gray}>Size:  <span>9 inches x 12 inches (22.86 cm x 30.48 cm)</span></p>
            </div>

          </div>

        </div>

      </AccordionSummary>
      <AccordionDetails>
        <p className={style.gray}>"Serenity in Blue" is a captivating oil painting depicting a tranquil seascape under a clear blue sky. 
                In the foreground, gentle waves roll onto a sandy shore, creating a sense of peaceful movement. The artist has expertly captured the play 
                of light and shadow on the water's surface, with reflections of the sky shimmering in the undulating waves. A lone sailboat drifts lazily 
                on the horizon, its billowing sails catching the soft breeze.</p>
        <form>
          <div>
          {
            mediums.map((item)=>
            <div className={style.art}>
              <p>
                {item.artwork}
              </p>
              <FormGroup  sx={{fontSize:"5.5rem"}}>
                {item.mediums.map((item)=> <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)} />} label={  <Typography variant="body1" sx={{ fontSize: "2.0rem" }}>
          {item}
        </Typography>} />)}
              </FormGroup>
            </div>
            )
          }
          </div>
          <div>
            <Button variant='contained' disabled={false} type='submit' >
              {true?"Add to Cart":"Out of Stock"}
            </Button>
          </div>
        </form>
        

      </AccordionDetails>
    </Accordion>
    
  )
}

export default ArtistArtwork