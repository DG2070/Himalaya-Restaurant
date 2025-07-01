import React from 'react'

const Header = ({title1,title2,title3}:{title1:string,title2:string,title3:string}) => {
  return (
    <div className='pb-11 flex flex-col gap-2 items-center'>
        <div className='text-body great-vibes-regular-32'>{title1}</div>
        <div className='playfair-medium-58 text-[#f2f2f2]'>{title2}{" "}
          <span className="text-primary playfair-extrabold-62">
            {title3}
          </span></div>
    </div>
  )
}

export default Header