import React from 'react'

type Props = {}

const ParallaxBottom = (props: Props) => {
  return (
    <div className="relative h-[33rem] w-full bg-[url('/tools.png')] bg-fixed bg-center bg-cover mt-16">
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"></div>
    </div>
  )
}

export default ParallaxBottom;