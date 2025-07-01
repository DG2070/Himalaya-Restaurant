import { cn } from '@/lib/utils'
import React from 'react'

interface GradientTextProps {
  text: string
  className?: string
}

const GradientText: React.FC<GradientTextProps> = ({ text, className }) => {
  return (
    <h1
      className={cn('bg-clip-text text-transparent w-fit', className)}
      style={{
        backgroundImage: 'linear-gradient(90deg, #dd5f34 0%, #ff7e5f 50%, #feb47b 100%)',
      }}
    >
      {text}
    </h1>
  )
}

export default GradientText