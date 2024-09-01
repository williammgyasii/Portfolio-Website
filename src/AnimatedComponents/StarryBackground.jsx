import React, { useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

function Stars() {
  const starsRef = useRef();

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
        size={2.5} // Increased size of stars
        sizeAttenuation
        transparent
        opacity={0.8} // Slightly transparent for a glowing effect
      />
    </points>
  );
}

function StarryBackgroundNoHover() {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',zIndex:1 }}>
      <ambientLight intensity={0.5} />
      <Stars />
      <OrbitControls />
    </Canvas>
  );
}

export default StarryBackgroundNoHover;
