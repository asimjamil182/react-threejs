import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Effects, Environment, GizmoHelper, GizmoViewport, Lightformer, OrbitControls, PerspectiveCamera, useGLTF, useHelper, useTexture } from '@react-three/drei';
import { CameraHelper, DirectionalLight, DirectionalLightHelper, Plane, PlaneGeometry, SpotLightHelper } from 'three';
import Shirt from './Shirt';


function LightWithHelper() {
  const light = useRef();
  useHelper(light, SpotLightHelper, 1, 'red');
  return (
    <spotLight ref={light} position={[5, 10, 0]} intensity={100} color={`red`} />
  );
}

function DirectionLightWithHelper() {
  const dlight = useRef();
  useHelper(dlight, DirectionalLightHelper, 5, 'blue');
  return (
    <directionalLight ref={dlight} position={[0, 10, 10]} intensity={0.5} color={`white`} />
  );
}

function CameraWithHelper() {
  const camera = useRef();
  useHelper(camera, CameraHelper, 2, 'orange');
  return (
    <PerspectiveCamera ref={camera} position={[0, 0, 5]} fov={30} far={15} scale={[4, 4, 4]} />
  );
}

function Scene({model}) {
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 8rem)' }}>
      <Canvas gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 25 }}>
        <axesHelper args={[5]} />
        {/* <gridHelper args={[10, 10]} /> */}
        <DirectionLightWithHelper />
        <LightWithHelper />
        {/* <CameraWithHelper /> */}
        <color attach="background" args={['#fffff']} />
        <hemisphereLight intensity={0.35} />
        <ContactShadows resolution={1024} frames={1} scale={15} blur={0.5} opacity={1} far={20} />
        <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#15151a" roughness={0.75} />
        </mesh>
        <mesh scale={4} position={[0, -1.9, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <ringGeometry args={[0.9, 1, 4, 1]} />
        </mesh>
        <Suspense fallback={null}>
          <mesh>
            {model}
          </mesh>
        </Suspense>

        <Environment preset='city' resolution={512}>
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
          {/* Sides */}
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
          <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
        </Environment>
        <Effects />
        <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate={true}
    
              />
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
        </GizmoHelper>
      </Canvas>
    </div>
  );
}



export default Scene;