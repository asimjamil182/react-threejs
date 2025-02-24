import { useState } from "react";
import Header from "./components/Header"
import Scene from "./components/Scene";
import Customizer from "./components/Customizer";
import DirectionView from "./components/DirectionView";


function App() {

  const [color, setColor] = useState('#ffffff');
  const [logo, setLogo] = useState('/react.png');
  const [texture, setTexture] = useState('/react.png');
  const [direction, setDirection] = useState('front');


  return (
    <>
      {/* <Header /> */}
      <div className="bg-gray-500 h-[3rem]">
        Header
      </div>
      <main className="w-full h-[calc(100vh-6rem)] bg-gray-300 flex justify-between">
        <div className="w-1/5 h-full overflow-auto bg-white">
          <Customizer activeTexture={(texture) => setTexture(texture)} activeColor={(color) => setColor(color)} activeLogo={(logo) => setLogo(logo)} />
        </div>
        <div className="w-3/5 flex justify-center items-center relative">
          <Scene color={color} logo={logo} texture={texture} direction={direction} />
          <DirectionView activeDirection={(dir)=>setDirection(dir)}/>
        </div>
        <div className="w-1/5 h-full overflow-auto bg-white">
          Right Side Menu
        </div>
      </main>
      <div className="bg-gray-500 h-[3rem]">
        footer
      </div>
    </>
  )
}

export default App
