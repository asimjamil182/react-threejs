import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

function Shirt({ modelUrl, texture, color }) {
  const { nodes, materials } = useGLTF(modelUrl);
  const tex = useTexture(texture);
  const shirtRef=useRef();
  return (
      <mesh scale={6} geometry={nodes.t_shirt.geometry} >
        <meshStandardMaterial
          map={tex}
          color={color}
        />
        <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        enableRotate={true}
        target={shirtRef.current ? shirtRef.current.position : [0, 0, 0]}
        />
      </mesh>
  );
}

export default Shirt;