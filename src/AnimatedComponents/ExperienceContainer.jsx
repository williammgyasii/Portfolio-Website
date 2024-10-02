import React from "react";
import AnimatedCircles from "./AnimatedCircles";

function ExperienceContainer({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) {
  return (
    <div
      className="my-8 md:my-1 w-[60%]  mx-auto flex flex-col
     items-center justify-between relative"
    >
      <AnimatedCircles />
      <h3 className="capitalize font-bold text-2xl">
        {position} &nbsp;
        <a
          className="text-primary capitalize"
          target="_blank"
          href={companyLink}
        >
          @{company}
        </a>
      </h3>
      <span className="capitalize font-medium text-dark/75">
        {time} | {address}
      </span>
      <p className="font-medium w-full">{work}</p>
    </div>
  );
}

export default ExperienceContainer;
