import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menubar from "./components/Menubar";
import Home from "./pages/Home";
import Search from "./pages/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
