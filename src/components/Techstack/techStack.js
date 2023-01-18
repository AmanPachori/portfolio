import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "../Data/data";
import Icons from "./Icon/Icons";

data.sort((a, b) => {
  let fa = a.name.toLowerCase();
  let fb = b.name.toLowerCase();
  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});

const TechStack = () => {
  const [Loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  });
  if (Loading) {
    return <span class="loader"></span>;
  }
  return (
    <div className="techStack container">
      <h5 className="fs-1 fw-bold m-2 p-2">Technologies I Know</h5>
      {data.map((e) => {
        return <Icons e={e} />;
      })}
    </div>
  );
};

export default TechStack;
