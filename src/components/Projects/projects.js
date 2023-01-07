import React from 'react'
import {data} from "../Data/project"

const Projects = () => {
  return(
    <div class="container project my-3">
    <h5 className="fs-1 fw-bold m-2 p-2 py-3">Projects</h5>
    <div className="row">
      {data.map((e) => {
        if (e.id % 2 == 0) {
          return (
            <>
              <div className="col-lg-6 my-2 py-3 col-sm-12 projectInfo d-flex flex-column align-items-center justify-content-center">
                <h5 className="fs-3 fw-bolder">{e.name}</h5>
                <p className="fs-5 fw-bold">{e.desc}</p>
                <a target='_blank' href={e.link} className="btn rounded p-2 fw-bold my-2">
                  See Code
                </a>
              </div>
              <div className="col-lg-6 my-2 projects col-sm-12">
                <img src={e.img} alt="Image" className="rounded" />
                {/* <div class="caption">
                  <h1>{e.name}</h1>
                </div> */}
              </div>
            </>
          );
        } else {
         return(
          <>
          <div className="col-lg-6 my-2 py-3 projects col-sm-12">
            <img src={e.img} alt="Image" className="rounded" />
            {/* <div class="caption">
              <h1>{e.name}</h1>
            </div> */}
          </div>
          <div className="col-lg-6 py-3 my-2 col-sm-12 projectInfo d-flex flex-column align-items-center justify-content-center">
            <h5 className="fs-3 fw-bolder"> {e.name}</h5>
            <p className="fs-5 fw-bold">{e.desc}</p>
            <a target='_blank' href={e.link} className="btn rounded p-2 fw-bold my-2">
              See Code
            </a>
          </div>
        </>
         )
        }
      })}
    </div>
  </div>
  )
}

export default Projects