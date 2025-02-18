import { Decal, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { useRef } from 'react';

function Shirt({ modelUrl, texture, color }) {
  const { nodes, materials } = useGLTF(modelUrl);
  const shirt = useRef();
  const tex=useTexture(texture);
  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.t_shirt.geometry}
        material={materials.texture}
        material-roughness={1}
        dispose={null}
        scale={2.3}
        ref={shirt}
      >
        <meshStandardMaterial
          color={color}
        />
        <Decal position={[0, 0.12, 0.15]} rotation={[0, 0, 0]} scale={0.15} map={tex} />
      </mesh>
    </group>
  );
}

export default Shirt;