import React from 'react'
import style from "./index.module.css"
import InnerSectionTwo from '../InnerSectionTwo'
import ArtStudioList from '../ArtStudio/ArtStudioList'

const artStudio = [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
const InnerSection = () => {
  return (
    <div className={style.main}>
        <section className={style.banner}>
            <div className={style.contain}>
              <h1 className={style.art}>ART EXPRESS</h1>
              <p className={style.unlock}>Unlock a world of creativity and inspiration at ArtXpress, your premier destination for purchasing breathtaking artistic drawings online.</p> 
            </div>
            <div className={style.cover}></div>
          <div className={style.fade}></div>
        </section>
        <section className={style.sec}>
          <p className={style.top}>
            TOP ARTWORKS
          </p>
          <InnerSectionTwo/>
        </section>
        <section className={style.order}>
          <h1 className={style.text}>
            Order From Our Handpicked Favorites ArtStudio
          </h1>
          <div className={style.artStudio}>
            {
              artStudio.map((item)=><ArtStudioList/>)
            }
          </div>
        </section>
    </div>
  )
}

export default InnerSection