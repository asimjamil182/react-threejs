import Footer from "./components/Footer"
import Header from "./components/Header"
import Shirt from "./components/Shirt"


function App() {
  return (
    <>
    <Header/>
    <main>
    <div className="flex justify-center items-center">
      <Shirt modelUrl={'/shirt_baked.glb'}/>
    </div>
    </main>
     <Footer/>
    </>
  )
}

export default App
