import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Shirt from './Shirt';
import CameraRig from './CameraRig';


function Scene({ color, image, direction }) {
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
          <Shirt modelUrl={'t_shirt.glb'} image={image} color={color} direction={direction} />
          {/* <Cup modelUrl={'cup.glb'} texture={'/threejs.png'} color={color} /> */}
        </Suspense>
      </CameraRig>
      <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    </Canvas>

  );
}



export default Scene;