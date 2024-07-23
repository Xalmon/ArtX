import React from 'react'
import {Card} from "@mui/material"
import { Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import  Style  from './Artist.module.css';
import image from "../../assests/images/captivating.webp"



const ArtistContentFavorite= () => {
  return (
    <Card className={Style.card}>
      <div className ={`${true?'cursor-pointer': 'cursor-not-allowed'} relative`}>
         <img
         className={Style.fav}
          src={image}
          alt=""
         />

<Chip
    size="small"
    className='absolute top-2 left-2'
    color={true?"success":"error"}
    label1={true?"open": 'closed'}
    />
      </div>
      <div className={Style.sec}>
        <div className={Style.secs}>

        </div>
        <p className={Style.vic}>
          Victor EKpuk
        </p>
        <p className={Style.des}>
        Victor Ekpuk Turns Ancient African Communication Systems into Captivating Contemporary Abstraction | Artsy
        </p>

      </div>
      <div>
                <IconButton>
                    {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>
              </div>

    </Card>
  )
}

export default ArtistContentFavorite