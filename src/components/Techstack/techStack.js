import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import ReactTooltip from "react-tooltip";
import 'bootstrap/dist/css/bootstrap.min.css';
import {data} from "../Data/data"

data.sort((a,b)=>{
  let fa = a.name.toLowerCase()
  let fb = b.name.toLowerCase()
  if (fa < fb) {
    return -1;
}
if (fa > fb) {
    return 1;
}
return 0;
})

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
const TechStack = () => {

  return (
    <div className='techStack container'>
     <h5 className='fs-1 fw-bold m-2 p-2'>Technologies I Know</h5>
      {
        data.map((e)=>{
          return(
            <>
             <img className="m-2 px-1 py-2 " src={e.img} alt={e.name} data-tip data-for={e.id}/> <IconData name={e.name} desc={e.desc} id={e.id}/>
             </>
          )
        })
      }
    </div>
  )
}

export default TechStack