import React from 'react'
import style from "./Main.module.css"
import ArtStudioList from '../../HeroTwo/ArtStudio/ArtStudioList'

const Favorites = () => {
  return (
    <div id={style.main} className='flex items-center flex-col min-h-[85.5vh]'>
      <h1 className='text-4xl text-center py-7 font-extrabold text-gray-700'>
        My Favorites
      </h1>
      <div className='flex flex-wrap gap-6 justify-center h-40'>
        {
            [1,1,1].map((item)=><ArtStudioList/>)
        }

      </div>
    </div>
  )
}

export default Favorites