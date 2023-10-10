import "./Style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Explore from "./pages/Explore";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/explore" element={<Explore/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
