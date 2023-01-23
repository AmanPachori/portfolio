import React from "react";
import { data } from "../../Data/data";
import Icons from "../../Techstack/Icon/Icons";

const Card1 = ({ e }) => {
  return (
    <div className="row p-3 my-1">
      <div className="order-sm-first order-xs-first col-lg-6 my-2 py-3 col-sm-12 projectInfo d-flex flex-column align-items-center justify-content-center">
        <h5 className="fs-3 fw-bolder">{e.name}</h5>
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
      <div className="order-sm-2 order-xs-last col-lg-6 my-2 projects col-sm-12">
        <img src={e.img} alt="Image" className="rounded" />
        {/* <div class="caption">
                  <h1>{e.name}</h1>
                </div> */}
      </div>
    </div>
  );
};

export default Card1;
