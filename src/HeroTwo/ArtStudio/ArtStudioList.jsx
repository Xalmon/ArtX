import React from 'react'
import {Card} from "@mui/material"
import style from "./ArtStudioList.module.css"
import image from "../../assets/images/index.jpeg"
import { Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ArtStudioList = () => {
  return (
    <Card className={style.main}>
        <div className={`${true? style.container : style.cursorNotAllowed}`}>
           <img 
           className={style.image}
           src={image} alt="" /> 

           <Chip
           size='small'
           className={style.position}
           color={true?"success":"error"}
           label1={true?"open": 'closed'}
           />
          
        </div>
        <div className={style.name}>
          <div className={style.title}>
            <p className={style.african}>
              African Art
              </p>
              <p className={style.dive}>
                Dive into our world of Nigeria art
              </p>


          </div>
          <div>
                <IconButton>
                    {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>
              </div>

        </div>

    </Card>
  )
}

export default ArtStudioList