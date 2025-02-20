import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { TextureLoader } from 'three';

function Cup({ modelUrl, logo, color, texture }) {
  const { nodes, materials } = useGLTF(modelUrl);
  const [scale, setScale] = useState(2.3);

  const [log, tex] = useTexture([logo, texture]);

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
        geometry={nodes.cup.geometry}
        material={materials.texture}
        material-roughness={1}
        dispose={null}
        scale={scale}
      >
        <meshStandardMaterial
          color={color}
          map={tex}
        />
         <Decal position={[0, 0.04, 0.20]} rotation={[0, 0, 0]} scale={0.15} map={log} />
      </mesh>
    </group>
  );
}

export default Cup;