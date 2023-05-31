import './App.css';
import Mynavbars from './components/Mynavbars';
import Heading from './components/Heading';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Program from "./components/Program"

function App() {
  return (
    <>
      <BrowserRouter>
      <Mynavbars />
       <Routes>
        <Route path="/" element={<Heading/>}></Route> 
        <Route path="/about" element={<Program/>}></Route> 
       </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
