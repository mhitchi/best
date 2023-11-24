import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/index";

function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/WhatsBest"/>
      <Route path="/BestCase"/>
      <Route path="/BestFriends"/>
   </Routes>
   </>
  );
}

export default App;
