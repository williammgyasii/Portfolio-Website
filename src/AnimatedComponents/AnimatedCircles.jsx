import React from "react";
import { motion, useScroll } from "framer-motion";

function AnimatedCircles({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  console.log(scrollYProgress);
  return (
    <figure className="absolute left-0 stroke-white">
      <svg className="-rotate-90" width={"75"} height={"75"} viewBox="0 0 100 100">
        <circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          style={{ pathLength: scrollYProgress }}
          className="stroke-[5px] fill-primary"
        />
        <circle
          cx={75}
          cy={50}
          r={10}
          className=" animate-pulse stroke-1 fill-primary"
        />
      </svg>
    </figure>
  );
}

export default AnimatedCircles;
