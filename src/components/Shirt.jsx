import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { GizmoHelper, GizmoViewport, OrbitControls, PerspectiveCamera, useGLTF, useHelper } from '@react-three/drei';
import { CameraHelper, DirectionalLight, DirectionalLightHelper, Plane, PlaneGeometry, SpotLightHelper } from 'three';

function ShirtModel({ modelUrl }) {
  const { scene } = useGLTF(modelUrl);

  scene.position.set(0, 0.2, 0);
  scene.scale.set(6, 6, 6);

  return <primitive object={scene} />;
}

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
    <PerspectiveCamera ref={camera} position={[0, 0, 5]} fov={30} far={15} scale={[4,4,4]} />
  );
}

function Shirt({ modelUrl }) {

  return (
    <div style={{ width: '100%', height: '100vh', background: '#333' }}>
      <Canvas>
        <axesHelper args={[5]} />
        {/* <gridHelper args={[10, 10]} /> */}
        <DirectionLightWithHelper />
        <LightWithHelper />
        <CameraWithHelper />
        <Suspense fallback={null}>
          <ShirtModel modelUrl={modelUrl} />
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} />
        {/* <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
        </GizmoHelper> */}
      </Canvas>
    </div>
  );
}

export default Shirt;