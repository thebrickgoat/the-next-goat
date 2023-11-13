// Import necessary dependencies
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// Define your Three.js component
const MyThreeJSComponent = () => {
  // Create a reference to the mesh
  const meshRef = useRef();

  // Set up state for rotation
  const [hovered, setHover] = useState(false);

  // Rotate mesh on each frame
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    
    <mesh
      ref={meshRef}
      scale={hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

// Create a wrapper component using the Canvas from react-three-fiber
const ThreeJSWrapper = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MyThreeJSComponent />
    </Canvas>
  );
};

// Export the wrapper component
export default ThreeJSWrapper;
