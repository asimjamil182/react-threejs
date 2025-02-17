import { useState } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Shirt from "./components/Shirt"
import Scene from "./components/Scene";
import Cup from "./components/cup";


function App() {

  const [color,setColor] = useState('#ffffff');

  const ActiveColor = (color) => {
    setColor(color);
  }
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <Header />
        <Scene model={<Cup modelUrl={'/cup.glb'} texture={`/react.png`} color={color} />}/>
        <Footer activeColor={ActiveColor} />
      </div>
    </>
  )
}

export default App
