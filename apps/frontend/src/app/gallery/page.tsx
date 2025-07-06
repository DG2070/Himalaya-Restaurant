import HeaderText from '@/components/shared/header-text'
import Hero from '@/components/shared/hero'
import React from 'react'

const Gallery = () => {
  return (
    <div>
      <Hero image='/discover.png' subtitle1='OUR' subtitle2='GALLERY' description='Journey through our world of authentic cuisine, where every image captures the essence of tradition, passion, and culinary artistry.'/>
      <HeaderText cursiveText='Flavorful Story' text='Featured' colorText='Moments'/>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3'>
        
      </div>
    </div>
  )
}

export default Gallery
