import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menubar from "./components/Menubar";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
