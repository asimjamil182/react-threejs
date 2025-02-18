import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useRef } from 'react';

function Cup({ modelUrl, texture, color }) {
  const { nodes, materials } = useGLTF(modelUrl);
  const shirt = useRef();
  const tex=useTexture(texture);
  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.cup.geometry}
        material={materials.texture}
        material-roughness={1}
        dispose={null}
        scale={2}
        ref={shirt}
      >
        <meshStandardMaterial
          color={color}
        />
        <Decal position={[0, 0.04, 0.20]} rotation={[0, 0, 0]} scale={0.15} map={tex} />
      </mesh>
    </group>
  );
}


export default Cup;