import { useState } from "react";
import Customizer from "../components/Customizer";
import Scene from "../components/Scene";
import DirectionView from "../components/DirectionView";
import Header from "../components/Header";
import PropertiesPanel from "../components/PropertiesPanel";



const CustomizerPage=()=> {

  const [color, setColor] = useState('#ffffff');
  const [decals, setDecals] = useState([]);
  const [direction, setDirection] = useState('Front');
  const [selectedLayer, setSelectedLayer] = useState({ id: 0, type: 'Image' });

  return (
    <>
      {/* <Header /> */}
        <Header/>
      <main className="w-full h-[calc(100vh-6rem)] bg-gray-300 flex justify-between flex-wrap md:flex-nowrap">
        <div className="w-1/5 h-full overflow-auto bg-white">
          <Customizer direction={direction} activeColor={(color) => setColor(color)} activeDecals={(decals) => setDecals(decals)} selectedLayer={(layer)=>setSelectedLayer(layer)} />
        </div>
        <div className="w-3/5 flex justify-center items-center relative">
          <Scene color={color} decals={decals} direction={direction} />
          <DirectionView activeDirection={(dir)=>setDirection(dir)}/>
        </div>
        <div className="w-1/5 h-full overflow-auto bg-slate-200">
          <PropertiesPanel selectedLayer={selectedLayer}/>
        </div>
      </main>
      <div className="bg-gray-500 h-[3rem]">
        footer
      </div>
    </>
  )
}

export default CustomizerPage;
