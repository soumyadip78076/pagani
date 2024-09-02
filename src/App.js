import React from 'react';
import MainPage from './JsFiles/MainPage';
import { Routes, Route } from 'react-router-dom'; 
import History from './JsFiles/History';
import Sidebar from './JsFiles/Sidebar';
import HyperCars from './JsFiles/HyperCars';
import Dealer from './JsFiles/Dealer';
import Carrear from './JsFiles/Carrear';
import Contact from './JsFiles/Contact';
import Store from './JsFiles/Store';
import Visit from './JsFiles/Visit';

function App() {
  return (
    <>
      <div><Sidebar /></div>
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* Route for the main page */}
      <Route path="/home" element={<MainPage />} />
      {/* Route for the history page */}
      <Route path="/history" element={<History/>} />
      <Route path="/hypercars" element={<HyperCars/>}/>
      <Route path="/dealers" element={<Dealer/>}/>
      <Route path="/visit" element={<Visit/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/carrear" element={<Carrear/>}/>
      <Route path="/store" element={<Store/>}/>



    </Routes>
    
    </>
  );
}

export default App;
