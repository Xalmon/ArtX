import React, { useState } from 'react'
import style from "./index.module.css"
import {Grid} from '@mui/material'
import image from '../../../assets/images/first.jpg'
import image2 from '../../../assets/images/second.jpg'
import image3 from '../../../assets/images/third.jpg'
import Modal from './index.jsx'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import InfoIcon from '@mui/icons-material/Info';
import {Divider,Typography} from '@mui/material'
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import ArtWorkListCard from './ArtWorkListCard.jsx'





const Categories=[
  "Sculpture",
  "Pencil Drawing",
  "Pen Drawing",
  "Paint Drawing",
  "Glass Drawing"

]
const ArtStudioDetails = () => {

  const [categories, setCategories] = useState("all");
  const handleFilter = (e)=>{
    console.log(e.target.value)
  }

  const artworks = [1,1,1,1,1,1]

  const allImage = [
    image,
    image2,
    image3
  ]
  return (
    <div id={style.main}>
       <section>
        <h3 style={{position:"relative",left:"632px",top:"70px",color:"rgb(68, 71, 70)",width:"500px"}}>
          Home/Nigeria/Artworks/4
        </h3>
        <div className={style.modal}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <Modal images={allImage}/>

            </Grid>

          </Grid>
        </div>
        <div className={style.name}>
            <h1 className={style.font}>
            ART WONDER 
            </h1>
            <div className={style.det}>
            <div style={{display:"flex",padding:"10px"}}>
            
            <InfoIcon style={{fontSize:"3.0rem"}}/> 
            <p style={{color:"rgb(68, 71, 70)",fontSize: "2.0rem",fontWeight:"1000"}}> DESCRIPTION:</p> 
            <p style={{color:"rgb(68, 71, 70)",textAlign:"center",marginLeft:"10px",fontSize: "2.0rem"}}>
      
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum ipsum ac velit sodales, in lacinia purus laoreet. Nulla facilisi. Maecenas auctor nibh vitae leo dictum.
            </p>
            </div>
            <div style={{display:"flex",padding:"10px"}}>
            
            <LocationOnIcon style={{fontSize:"3.0rem"}}/> 
            <p style={{color:"rgb(68, 71, 70)",fontSize: "2.0rem",fontWeight:"1000"}}> LOCATION:</p> 
            <p style={{color:"rgb(68, 71, 70)",textAlign:"center",marginLeft:"10px",fontSize: "2.0rem"}}>
      
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum ipsum ac velit sodales.
            </p>
            </div>
            <div style={{display:"flex",padding:"10px"}}>
            
            <CalendarTodayIcon style={{fontSize:"2.7rem"}}/> 
            <p style={{color:"rgb(68, 71, 70)",fontSize: "2.0rem",fontWeight:"1000"}}> OPENING HOURS:</p> 
            <p style={{color:"rgb(68, 71, 70)",textAlign:"center",marginLeft:"10px",fontSize: "2.0rem"}}>
      
             Mon-Sun: 9:00 AM - 9:00 PM (Today)
            </p>
            </div>
            </div>
        </div>
       </section>
      
        <Divider style={{marginTop:"30px",fontSize:"5.5rem",fontWeight:"1000"}}/>
        <Divider style={{fontSize:"5.5rem",fontWeight:"1000"}}/>
        <Divider style={{fontSize:"5.5rem",fontWeight:"1000"}}/>
        <Divider style={{fontSize:"5.5rem",fontWeight:"1000"}}/>
        <section className={style.third}>
          <div className={style.div}>
           <div className={style.filter}>
              <div style={{marginLeft:"100px"}}>
                <Typography variant='h5' sx={{paddingBottom:"1rem",fontSize:"2.5rem",fontWeight:"1000",color:"rgb(68, 71, 70)"}}>

                CATEGORY
                </Typography>
                <FormControl className={style.form} component={"fieldset"}>
                  <RadioGroup onChange={handleFilter} name='categories' value={categories}>
                      {Categories.map((item) => (
                       
                        <FormControlLabel 
                        key={item}
                        value={item}
                        control={<Radio/>}
                        label={<span style={{ fontSize: '2rem',fontWeight:"1000",color:"rgb(68, 71, 70)" }}>{item}</span>}
                       
                        />
                        
                      ))}
                  </RadioGroup>

                </FormControl>
              </div>
           </div>
          </div>
          <div className={style.divs}>
            <p style={{fontWeight:"1000",color:"rgb(68, 71, 70)"}}>ARTWORKS</p>
         {artworks.map((item)=><ArtWorkListCard/>)}
         </div>
       </section>
        </div>
  )
}

export default ArtStudioDetails