import Image from 'next/image'
import React from 'react'

const FeaturedCard = () => {
  return (
    <div className='h-[273px] flex flex-col gap-4 relative rounded-[12px] bg-linear'>
      <Image alt='card image' src={"/about-1"} height={273} width={364} layout='fill' />
      <div className='flex flex-col gap-3'> 
        <div className='playfair-medium-22 text-heading'>Himalayan Momo Artistry</div>
        <div className='lato-regular-18 text-center text-body'>Hand-crafted dumplings showcasing generations of culinary mastery</div>
      </div>

    </div>
  )
}

export default FeaturedCard