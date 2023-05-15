import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Pptls from './components/PPTLS';
import Tamagotchi from './components/Tamagotchi';
import Resultados from './components/Resultados';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/pptls" element={<Pptls/>}/>

        <Route path="/tamagotchi" element={<Tamagotchi/>}/>

        <Route path="/resultados" element={<Resultados/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
