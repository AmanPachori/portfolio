import React from 'react'

const Projects = () => {
  return (
    <div class="container project my-3">
      <h5 className="fs-1 fw-bold m-2 p-2 py-3">Projects</h5>
      <div className="row">
        <div className="col-lg-6 py-3 col-sm-12 projectInfo d-flex flex-column align-items-center justify-content-center">
          <h5 className="fs-3 fw-bolder"> Project Name</h5>
          <p className="fs-5 fw-bold">
            lorem isdsdsg .vsdj some redndvvd dvvnsjj
          </p>
          <button className="btn rounded p-2 fw-bold my-2">See Code</button>
        </div>
        <div className="col-lg-6 my-2 projects col-sm-12">
          <img
            src="https://i.picsum.photos/id/972/536/354.jpg?hmac=YUVQvWb_AFQBjRRoPhOjfPqw2kdeEgglmWAD-U39--o"
            alt="Image"
            className='rounded'
          />
          <div class="caption">
            <h1>Project Name</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects