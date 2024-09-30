import React from 'react';
import MainPage from './JsFiles/MainPage';
import { Routes, Route } from 'react-router-dom'; 
import Sidebar from './JsFiles/Sidebar';
import History from './JsFiles/History';
import HyperCars from './JsFiles/HyperCars';
import Dealer from './JsFiles/Dealer';
import Carrear from './JsFiles/Carrear';
import Contact from './JsFiles/Contact';
import Store from './JsFiles/Store';
import Visit from './JsFiles/Visit';
import Login from './JsFiles/Login';
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
      <Route path='/login/*' element={<Login/>}/>
    </Routes>
    
    </>
  );
}

export default App;
