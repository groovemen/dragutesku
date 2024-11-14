import React from 'react'

type Props = {}

const Parallax = (props: Props) => {
  return (
    <div className="relative h-[20rem] md:h-[33rem] w-full bg-[url('/mixer.png')] bg-fixed bg-center bg-cover">
      <div className="absolute inset-0 flex items-center justify-center bg-[#000] bg-opacity-40"></div>
    </div>
  )
}

export default Parallax;