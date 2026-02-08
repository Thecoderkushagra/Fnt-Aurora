import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menubar from "./components/Menubar";

import Home from "./pages/Home";
import Series from "./pages/SreirsPage";
import Movies from "./pages/MoviePage";
import MyList from "./pages/MyListPage";

import Search from "./pages/Search";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

import VideoPlayer from "./pages/VideoPlayer";


const App = () => {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/mylist" element={<MyList />} />

        <Route path="/search" element={<Search />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/video" element={<VideoPlayer />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
