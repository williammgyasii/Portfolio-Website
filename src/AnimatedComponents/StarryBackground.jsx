import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

function Stars() {
  const groupRef = useRef();

  useEffect(() => {
    const stars = new Array(1000).fill().map(() => {
      const star = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(2000), // X coordinate
        THREE.MathUtils.randFloatSpread(2000), // Y coordinate
        THREE.MathUtils.randFloatSpread(2000) // Z coordinate
      );
      return star;
    });

    groupRef.current.geometry.setFromPoints(stars);
  }, []);

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry />
        <pointsMaterial color={0xffffff} size={1.5} sizeAttenuation />
      </points>
    </group>
  );
}

function StarryBackground() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <ambientLight intensity={0.5} />
      <Stars />
      <OrbitControls />
    </Canvas>
  );
}

export default StarryBackground;
