import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/index";
import Home from "./pages/Home";
import WhatsBest from './pages/WhatsBest';
import BestFriends from './pages/BestFriends';
import BestCase from './pages/BestCase';

function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Layout/>}/>
        <Route index element={<Home />}/>
        <Route index element={<WhatsBest />}/>
        <Route index element={<BestCase />}/>
        <Route index element={<BestFriends />}/>
   </Routes>
   </>
  );
}

export default App;
