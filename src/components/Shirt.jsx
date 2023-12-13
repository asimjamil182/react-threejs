// ThreeModel.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei';

const Model = ({ url }) => {
  const gltf = useGLTF(url, true);
  return <primitive object={gltf.scene} />;
};

const Scene = ({ modelUrl }) => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }} style={{ width: '100%', height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model url={modelUrl} />
    </Canvas>
  );
};

const Shirt = ({ modelUrl }) => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Scene modelUrl={modelUrl} />
    </div>
  );
};

export default Shirt;
