import { useGSAP } from '@gsap/react';
import { Decal, Outlines, Text, useGLTF, useTexture } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { CanvasTexture, TextureLoader } from 'three';
import gsap from 'gsap';


function Shirt({ modelUrl, image, color, direction }) {

  const { nodes, materials } = useGLTF(modelUrl);
  const [scale, setScale] = useState(2.3);
  const [rotation, setRotation] = useState(0);


  const textTexture=createTextTexture('Hello World');
  const [log] = useTexture([image]);

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
        <Decal onClick={(e)=>console.log(e)} position={[0, 0.12, 0.15]} rotation={[0, 0, 0]} scale={0.15}>
          <meshStandardMaterial transparent map={log}/>    
        </Decal>
      </mesh>
    </group>
  );
}

export default Shirt;

function createTextTexture(text='Hello World',fontSize='100px',fontColor='black',background='transparent') {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 512;
  canvas.height = 256;
  context.fillStyle = background;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = fontColor;
  context.font = `${fontSize} Arial`;
  context.textAlign = 'center'
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  context.stroke=1;
  return new CanvasTexture(canvas);
}