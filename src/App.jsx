import { useState } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Shirt from "./components/Shirt"
import Scene from "./components/Scene";
import Cup from "./components/cup";
import Customizer from "./components/Customizer";


function App() {

  const [color,setColor] = useState('#ffffff');
  const [logo,setLogo] = useState('/react.png');
  const [texture,setTexture] = useState('/react.png');


  return (
    <>
        <Header />
        <main className="w-full h-[calc(100vh-6rem)] bg-gray-300">
        <Scene color={color} logo={logo} texture={texture}  />
        </main>
        <Customizer activeTexture={(texture)=>setTexture(texture)} activeColor={(color)=>setColor(color)} activeLogo={(logo)=>setLogo(logo)} />
    </>
  )
}

export default App
