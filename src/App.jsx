
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CustomizerPage from "./pages/CustomizerPage";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="customizer" element={<CustomizerPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
