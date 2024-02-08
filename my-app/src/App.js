import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/index";
import Stickers from "./pages/Stickers";
import WhatsBest from './pages/WhatsBest';
import BestFriends from './pages/BestFriends';
import BestCase from './pages/BestCase';


function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/bestfriends" element={<BestFriends />}/>
        <Route index element={<Stickers />}/>
        <Route path="/whatsbest" element={<WhatsBest />}/>
        <Route path="/bestcase" element={<BestCase />}/>
      </Route>
   </Routes>
   </>
  );
}

export default App;
