import React from 'react'

type Props = {}

const Parallax = (props: Props) => {
  return (
    <div className="relative h-[32rem] w-full bg-[url('/mixer.png')] bg-fixed bg-[200%] bg-center">
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"></div>
    </div>
  )
}

export default Parallax;