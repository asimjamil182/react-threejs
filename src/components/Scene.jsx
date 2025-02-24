import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Plane } from '@react-three/drei';
import Shirt from './Shirt';
import CameraRig from './CameraRig';
import Backdrop from './Backdrop';
import Cup from './cup';


function Scene({ color, logo, texture, direction }) {
  console.log(color, logo, texture, direction);
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}
      className='!max-w-[700px] !max-h-[700px] bg-white overflow-hidden'
      shadows
    >
      <ambientLight intensity={0.5 * Math.PI} />
      <Environment preset='city' />
      <CameraRig>
        {/* <Backdrop /> */}
        <Suspense fallback={null}>
          <Shirt modelUrl={'t_shirt.glb'} logo={logo} color={color} texture={texture} direction={direction} />
          {/* <Cup modelUrl={'cup.glb'} texture={'/threejs.png'} color={color} /> */}
        </Suspense>
      </CameraRig>
      <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    </Canvas>

  );
}



export default Scene;