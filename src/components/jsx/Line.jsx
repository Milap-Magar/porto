import React from 'react'
import "../css/components.css";

const Line = (props) => {
  return (
    <div className='w-full h-screen relative'>
        <div className="works-heading absolute top-[274px] left-12 md:top-0">{ props.heading } </div>
        <div className="bg-black rounded-lg h-[0.2vh] w-[95%] absolute top-[350px] md:top-[90px] left-4"></div>
    </div>
  )
}

export default Line