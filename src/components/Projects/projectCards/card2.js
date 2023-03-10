import React from "react";
import { data } from "../../Data/data";
import Icons from "../../Techstack/Icon/Icons";

const Card2 = ({ e }) => {
  return (
    <div className="row p-3 my-1">
      <div className="col-lg-6 order-sm-2 order-xs-last order-lg-1 my-2 py-3 projects col-sm-12">
        <img src={e.img} alt="Image" className="rounded" />
        {/* <div class="caption">
              <h1>{e.name}</h1>
            </div> */}
      </div>
      <div className="order-sm-1 order-xs-1 order-lg-2 col-lg-6 py-3 my-2 col-sm-12 projectInfo d-flex flex-column align-items-sm-top align-items-center justify-content-center">
        <h5 className="fs-3 fw-bolder"> {e.name}</h5>
        <p className="fs-5 fw-bold">{e.desc}</p>
        <div className="d-flex ">
          {data
            .filter((item) => e.techStak.includes(item.name))
            .map((item) => {
              return <Icons e={item} />;
            })}
        </div>
        <a
          target="_blank"
          href={e.link}
          className="btn rounded p-2 fw-bold my-2"
        >
          See Code
        </a>
      </div>
    </div>
  );
};

export default Card2;
