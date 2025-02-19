import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

function Shirt({ modelUrl, logo, color, texture }) {
  const { nodes, materials } = useGLTF(modelUrl);
  const [scale, setScale] = useState(2.3);
  const shirt = useRef();
  const log = useTexture(logo);
  // const tex = useTexture(texture);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setScale(1.5);
    } else {
      setScale(2.3);
    }
  }, [window.innerWidth])

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.t_shirt.geometry}
        material={materials.texture}
        material-roughness={1}
        dispose={null}
        scale={scale}
        ref={shirt}
      >
        <meshStandardMaterial
          color={color}
        />
        <Decal position={[0, 0.12, 0.15]} rotation={[0, 0, 0]} scale={0.15} map={log} />
      </mesh>
    </group>
  );
}

export default Shirt;