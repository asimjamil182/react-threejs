import { useGSAP } from '@gsap/react';
import { Decal, Outlines, Text, useGLTF, useTexture } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { CanvasTexture, TextureLoader } from 'three';


function Shirt({ modelUrl, decals, color, direction }) {

  const { nodes, materials } = useGLTF(modelUrl);
  const [scale, setScale] = useState(2.3);
  const [rotation, setRotation] = useState(0);
  const [decalImages, setDecalImages] = useState([]);

  useEffect(() => {
    setDecalImages(decals);
  }, [decals]);
  useEffect(() => {
    if (direction === 'Front') {
      setRotation(0);
    } else if (direction === 'Left') {
      setRotation(Math.PI / 2);
    } else if (direction === 'Back') {
      setRotation(Math.PI);
    } else if (direction === 'Right') {
      setRotation(-Math.PI / 2);
    }
  }, [direction]);

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
        rotation={[0, rotation, 0]}
      >
        <meshStandardMaterial
          color={color}
        />
        {decalImages.map((decal, index) => (
          <Decal
            onClick={() => {
              console.log('decal clicked', decal.id);
            }}
            key={index}
            position={decal.position}
            scale={decal.scale}
            rotation={decal.rotation}
            material={materials.texture}
          >
            <meshStandardMaterial transparent map={decal.type=='Image'?new TextureLoader().load(decal.url):decal.texture} polygonOffset polygonOffsetFactor={-1*(index+1)}/>
          </Decal>
        ))}
        
      </mesh>
    </group>
  );
}

export default Shirt;

