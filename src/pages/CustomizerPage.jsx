import { useState } from "react";
import Customizer from "../components/Customizer";
import Scene from "../components/Scene";
import DirectionView from "../components/DirectionView";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Layer from "../components/Layer";
import PropertiesPanel from "../components/PropertiesPanel";



const CustomizerPage=()=> {

  const [color, setColor] = useState('#ffffff');
  const [image, setImage] = useState('/react.png');
  const [direction, setDirection] = useState('front');
  const parm=useParams();
  console.log('parm',parm);
  return (
    <>
      {/* <Header /> */}
        <Header/>
      <main className="w-full h-[calc(100vh-6rem)] bg-gray-300 flex justify-between flex-wrap md:flex-nowrap">
        <div className="w-1/5 h-full overflow-auto bg-white">
          <Customizer activeColor={(color) => setColor(color)} activeImage={(image) => setImage(image)} />
        </div>
        <div className="w-3/5 flex justify-center items-center relative">
          <Scene color={color} image={image} direction={direction} />
          <DirectionView activeDirection={(dir)=>setDirection(dir)}/>
        </div>
        <div className="w-1/5 h-full overflow-auto bg-slate-200">
          <PropertiesPanel/>
        </div>
      </main>
      <div className="bg-gray-500 h-[3rem]">
        footer
      </div>
    </>
  )
}

export default CustomizerPage;
