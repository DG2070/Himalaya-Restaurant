import FeaturedCard from '@/components/shared/featured-card'
import HeaderText from '@/components/shared/header-text'
import Hero from '@/components/shared/hero'
import Hero2 from '@/components/shared/hero2'
import React from 'react'

const Gallery = () => {
  return (
    <div>
      <Hero image='/discover.png' subtitle1='OUR' subtitle2='GALLERY' description='Journey through our world of authentic cuisine, where every image captures the essence of tradition, passion, and culinary artistry.'/>
      <HeaderText cursiveText='Flavorful Story' text='Featured' colorText='Moments'/>
      <div className='container mx-auto p-8'>
        <FeaturedCard  featured image='/about-2.png' text1='Tibetan New Year Feast' text2='Annual celebration bringing community together'/>
      </div>
      <Hero2 title={"Create Your Own Story"} description={"Join us for an unforgettable dining experience where every moment becomes a cherished memory worth capturing."} />
    </div>
  )
}

export default Gallery
