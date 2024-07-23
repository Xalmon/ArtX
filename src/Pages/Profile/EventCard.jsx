import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import style from "./profile.module.css"
import image from "../../assests/images/nigeria.webp"
import DeleteIcon from '@mui/icons-material/Delete';


const EventCard = () => {
  return (
    <div>
        <Card sx={{width:900}}>
        <CardMedia 
        sx={{height:900}}
        image={image}/>
        
        <CardContent>
            <Typography variant='h5' sx={{fontSize:"35px"}}>
                Nigeria Art Festival
            </Typography>
            <Typography variant='Body2' sx={{fontSize:"30px"}}>
                One for All
            </Typography>
            <div className={style.eventCard}>
                <p style={{fontSize:"25px"}}>{"Lagos"}</p>
                <p className={style.date}>March 12, 2024 12:00 PM</p>
                <p className={style.date}>March 13, 2024 18:00 PM</p>

             <Divider/>
             <h1 style={{opacity:"0.8"}}>
             To participate in this event, please register by clicking the button below.
             </h1>
             <Button variant='contained' sx={{fontSize:"2.0rem"}}>Register</Button>

            </div>

            </CardContent>
        { false && <CardActions>
                <IconButton>
                   <DeleteIcon/>
                </IconButton>

            </CardActions>}
       </Card>
    </div>
  )
}

export default EventCard