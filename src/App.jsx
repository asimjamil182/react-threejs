import { useState } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Shirt from "./components/Shirt"
import Scene from "./components/Scene";
import Cup from "./components/cup";
import Customizer from "./components/Customizer";


function App() {

  const [color,setColor] = useState('#ffffff');

  const activeColor = (color) => {
    setColor(color);
  }
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <Header />
        <main className="w-full h-[calc(100vh)] bg-gray-300">
        <Scene color={color} />
        </main>
        {/* <Footer activeColor={ActiveColor} /> */}
        <Customizer activeColor={activeColor}/>
      </div>
    </>
  )
}

export default App
