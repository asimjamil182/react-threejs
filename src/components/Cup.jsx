import { Decal, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

function Cup({ modelUrl, texture, color }) {
  const { nodes, materials } = useGLTF(modelUrl);
  const tex = useTexture(texture);
  const shirtRef = useRef();
  return (
    <mesh scale={6} geometry={nodes.cup.geometry} >
      <meshStandardMaterial
        map={tex}
        color={color}
      />
      
      <Decal
        position={[0, 0, 0.2]} 
        rotation={[0, 0, 0]} 
        scale={0.3} 
        map={useTexture('/threejs.png')} 
      />
    </mesh>
  );
}

export default Cup;