import React from 'react'
import { imageLibrary } from '../../../assets/assets'

export const Logo = () => {

  return (
      <div className='md:mb-6 lg:mb-0'>
      <img
        src={imageLibrary.filmoraLogo}
        className='w-[100px] md:w-[200px]'
        alt='G-filmora'
      />
    </div>
  )
}
