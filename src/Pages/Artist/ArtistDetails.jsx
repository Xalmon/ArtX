import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, {useState} from 'react'
import style from './Artist.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import zIndex from '@mui/material/styles/zIndex';
import ArtistArtwork from './ArtistArtwork.jsx';


const categories = [
  { label: "Digital Painting and Drawing Representation", value: "painting_drawing" },
  { label: "Pencil Drawing(Graphite / Charcoal)", value: "pencil_drawing" },
  { label: "Digital Photography", value: "digital_photography" },
  { label: "Pen Drawing", value: "pen_drawing" },
  { label: "Oil Painting", value: "oil_painting" },
  { label: "Coloured Pencil Drawing", value: "coloured_pencil_drawing" },
  { label: "Assemblage Art", value: "assemblage_art" },
  { label: "Glass Shard Art", value: "glass_shard_art" }
];

const menu = [1,1,1,1,1,1]


const ArtistDetails = () => {
  const [category] = useState("painting_drawing")
 
  const handleFilter =(e)=>{
    console.log(e.target.value,e.target.name)
}
  return (
    <div className={style.major}>
      <div>
        <section>
           <h3 className={style.main}>
                   Artist
                </h3>
                <div>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <img 
                      className={style.image}
                      src='https://www.artnews.com/wp-content/uploads/2022/06/Beninese-painter-Patricorel-left-and-Mr-Eazi-right-posing-in-front-of-the-Legalize-artwork.-Photo-credit-Mr-Eazi-e1654860278292.jpeg?w=1024' 
                      alt=''/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <img 
                      className={style.image}
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8iYUwxl_BuugR12JN7NkZ95wLI3BrpYelLFY2HOI6Jrah1rkR-BKL9JUpXnl9VYmBeCo&usqp=CAU' 
                      alt=''/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <img 
                      className={style.image}
                      src='https://i0.wp.com/thenews-chronicle.com/wp-content/uploads/2023/06/Capture.webp?fit=418%2C246&ssl=1' 
                      alt=''/>
                    </Grid>

                  </Grid>
                </div>
                <div className={style.second}>
                    <h1 className={style.name}>
                      ArtExcellence
                    </h1>
                    <p className={style.description}>Description</p>
                    <p className={style.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam fringilla justo ac ligula dictum, at venenatis nunc 
                    congue. Mauris viverra sapien ac massa venenatis, ac varius 
                    dolor fermentum. Donec quis enim ligula. Vivamus in justo eu 
                    nisl consequat vestibulum. Morbi gravida, ipsum ac dapibus lobortis, 
                     lectus tincidunt quam, sit amet vulputate nisi lorem a eros. Cras 
                     eu enim sed velit vulputate malesuada. Proin vestibulum odio id arcu 
                     dignissim, ut congue purus hendrerit. Nullam sollicitudin efficitur velit, 
                     nec laoreet quam sollicitudin sit amet. 
                    </p>
                    <div className={style.third}>
                      <p className={style.location}>
                        <LocationOnIcon  sx={{fontSize:"100%"}}/>
                        <span>
                        Lagos Nigeria
                    </span>
                      </p>
                      <p className={style.location}>
                      <CalendarTodayIcon/>
                        <span>
                        Mon-Sun: 9:00 AM - 9:00 PM (Today)
                    </span>
                      </p>
                    </div>
                </div>
        </section>
        <Divider sx={{zIndex:5}}/>
        <section className={style.secondMain}>
          <div className={style.section}>
            <div className={style.box}>
            <div>
             <Typography variant='h5' sx={{paddingBottom: "1rem",fontSize: "3.0rem", opacity:"0.7"}} >
              Category
             </Typography>
             <FormControl component={'fieldset'} className={style.name}>
                <RadioGroup onChange={handleFilter} name='category_type' value={category} sx={{color:"white",width:"800px",fontSize:"100%"}}>
              {categories.map((item)=><FormControlLabel
              key={item.value}
              value={item.value}
              control={<Radio sx={{ color: 'white' }} />}
              label={item.label}
              sx={{ '& .MuiTypography-body1': { fontSize: "100%" ,opacity:"0.7"} }}

              />)}
                </RadioGroup>
             </FormControl>

            </div>
            </div>
          </div>
          <div className={style.button}>
          {
          menu.map(()=><ArtistArtwork/>)
        }

          </div>
        </section>
      </div>
    </div>
  )
}

export default ArtistDetails