import Shirt from "./components/Shirt"
import ThreeDObjectViewer from "./components/Shirt"


function App() {
  return (
    <>
     <h1 className=" text-3xl text-red-600">react project</h1>
     <Shirt modelUrl={'/shirt_baked.glb'}/>
    </>
  )
}

export default App
