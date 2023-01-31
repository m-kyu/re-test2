import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ResponsiveAppBar from './pages/Nav';
import Ui from './pages/Ui';
import Slide from './pages/Slide';
import Animate from './pages/Animate';
import Chart from './pages/Chart';
import { motion, AnimatePresence } from "framer-motion"

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar/>
      <main>
        <AnimatePresence>
          <Routes>
            <Route path="Ui" element={<Ui/>} />
            <Route path="Slide" element={<Slide/>} />
            <Route path="Animate" element={<Animate/>} />
            <Route path="Chart" element={<Chart/>} />
          </Routes>
        </AnimatePresence>
      </main>
    </BrowserRouter>
  );
}

export default App;
