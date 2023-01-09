import React from 'react'
import {projectData} from "../Data/project"
import Card1 from './projectCards/card1';
import Card2 from './projectCards/card2';

const Projects = () => {
  return(
    <div class="container project my-3">
    <h5 className="fs-1 fw-bold m-2 p-2 py-3">Projects</h5>
      {projectData.map((e) => {
        if (e.id % 2 == 0) {
          return (
            <Card1 e={e}/>
          );
        } else {
         return(
          <Card2 e={e}/>
         )
        }
      })}
    </div>
  )
}

export default Projects