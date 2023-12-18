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
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="/whatsbest" element={<WhatsBest />}/>
        <Route path="/bestcase" element={<BestCase />}/>
        <Route path="/bestfriends" element={<BestFriends />}/>
      </Route>
   </Routes>
   </>
  );
}

export default App;
