import React, { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

function Stars({ mouse }) {
  const starsRef = useRef();
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });
  const [currentRotation, setCurrentRotation] = useState({ x: 0, y: 0 });

  // Generate star positions
  const starPositions = useMemo(() => {
    const positions = new Float32Array(5000 * 3); // 5000 stars

    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = THREE.MathUtils.randFloatSpread(3000); // x
      positions[i * 3 + 1] = THREE.MathUtils.randFloatSpread(3000); // y
      positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(3000); // z
    }

    return positions;
  }, []);

  // Rotate stars based on mouse position
  useFrame(() => {
    if (starsRef.current) {
      // Update target rotation based on mouse position
      setTargetRotation({
        x: -mouse.y * 0.2, // Adjust sensitivity here
        y: mouse.x * 0.2,
      });

      // Smoothly interpolate rotation
      setCurrentRotation({
        x: THREE.MathUtils.lerp(currentRotation.x, targetRotation.x, 0.1),
        y: THREE.MathUtils.lerp(currentRotation.y, targetRotation.y, 0.1),
      });

      starsRef.current.rotation.x = currentRotation.x;
      starsRef.current.rotation.y = currentRotation.y;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={starPositions}
          count={starPositions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        color={0xffffff}
        size={2} // Increased size of stars
        sizeAttenuation
        transparent
        opacity={0.8} // Slightly transparent for a glowing effect
      />
    </points>
  );
}

function StarryBackgoundHover({ rotationEnabled, mouse }) {
  //   const [rotationEnabled, setRotationEnabled] = useState(false);

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
      <ambientLight intensity={2} />
      <Stars mouse={mouse} />
      {/* <Stars rotationEnabled={rotationEnabled} /> */}
      <OrbitControls />
    </Canvas>
  );
}

export default StarryBackgoundHover;
