import React from 'react'
import style from "./profile.module.css"
import ArtistContentFavorite from '../Artist/ArtistContentFavorite'

const Favorites = () => {
  return (
    <div style={{background:"white",height:"1800px"}}>
      <h1 className={style.favorite}>
        MY FAVOURITE
      </h1>
      <div className={style.list}>
        {
          [1,1,1].map((item)=><ArtistContentFavorite/>)
        }
      </div>
    </div>
  )
}

export default Favorites