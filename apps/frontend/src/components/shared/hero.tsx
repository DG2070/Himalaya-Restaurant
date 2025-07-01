import React from 'react'

const Hero = ({title,subtitle,description,buttons}:{title?:string,description:string,subtitle:string,buttons:boolean}) => {
  return (
    <div className='w-screen h-[796px] grid place-items-center'>
      <div>{title}</div>
      <div>{subtitle}</div>
      <div>{description}</div>
      {buttons &&   <div>
        </div>}
    
    </div>
  )
}

export default Hero
