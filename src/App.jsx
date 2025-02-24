
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CustomizerPage from "./pages/CustomizerPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="customizer" element={<CustomizerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
