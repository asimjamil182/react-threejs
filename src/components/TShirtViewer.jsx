import React, { Suspense, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';

function TShirt({ textureUrl, color }) {
  const { nodes, materials } = useGLTF('/shirt_baked.glb'); // Replace with your T-shirt GLTF file
//   const texture = useTexture(textureUrl); // Load the texture
    console.log(nodes, materials);
  return (
    <mesh geometry={nodes.T_Shirt_male.geometry}>
      <meshStandardMaterial
        // map={texture} // Apply the texture
        color={color} // Apply the color
      />
    </mesh>
  );
}

function TShirtViewer() {
  const [textureUrl, setTextureUrl] = useState('/texture1.jpg'); // Default texture
  const [color, setColor] = useState('#ffffff'); // Default color

  const textures = [
    { name: 'Texture 1', url: '/texture1.jpg' },
    { name: 'Texture 2', url: '/texture2.jpg' },
    { name: 'Texture 3', url: '/texture3.jpg' },
  ];

  const colors = ['#ffffff', '#ff0000', '#00ff00', '#0000ff']; // Example colors

  return (
    <div style={{ width: '100%', height: '100vh', background: '#f0f0f0' }}>
      {/* Canvas for 3D rendering */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Suspense fallback={null}>
          <TShirt textureUrl={textureUrl} color={color} />
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>

      {/* UI for changing texture and color */}
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
        <h3>Change Texture</h3>
        {textures.map((texture, index) => (
          <button
            key={index}
            onClick={() => setTextureUrl(texture.url)}
            style={{ margin: 5 }}
          >
            {texture.name}
          </button>
        ))}

        <h3>Change Color</h3>
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => setColor(color)}
            style={{ margin: 5, backgroundColor: color, width: 50, height: 30 }}
          />
        ))}
      </div>
    </div>
  );
}

export default TShirtViewer;