import React from 'react'
import ReactTooltip from "react-tooltip";
const IconData = (prop) => {
  return(
    <>
    <ReactTooltip id={prop.id}  place='bottom'
 
      effect='solid'
      delayHide={500}
      delayShow={300}
      arrowColor='var(--primaryColor)'
      delayUpdate={500} className='icondata'>
    <h4 className='py-2 fw-bold'>{prop.name}</h4>
    <p className='fw-normal fs-6'>{prop.desc}</p>
  </ReactTooltip>
    </>
  )
}

const Icons = ({e}) => {
  return (
    <>
      <img
        className="m-2 px-1 py-2 "
        src={e.img}
        alt={e.name}
        data-tip
        data-for={e.id}
      />{" "}
      <IconData name={e.name} desc={e.desc} id={e.id} />
    </>
  );
}

export default Icons