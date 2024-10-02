import React from "react";
import { motion } from "framer-motion";

function AnimatedCircles() {
  return (
    <figure className="absolute left-0 top-0 stroke-white">
      <svg width={"75"} height={"75"} viewBox="0 0 100 100" />
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
        className="stroke-[-5] fill-light"
      />
      <circle cx={75} cy={50} r={10} className="stroke-1 fill-primary" />
    </figure>
  );
}

export default AnimatedCircles;
