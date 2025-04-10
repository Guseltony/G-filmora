import React from 'react'
import { imageLibrary } from '../../../assets/assets'

export const Logo = () => {

  return (
      <div>
      <img
        src={imageLibrary.filmoraLogo}
        className='w-[100px] md:w-[200px]'
        alt='G-filmora'
      />
    </div>
  )
}
