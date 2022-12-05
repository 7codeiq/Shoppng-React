import './App.css';
import React from 'react'
import { Routes, Route} from "react-router-dom";
import {Home, Products, Shopping ,About ,Contact} from '../src/pages/index'

const App = () => {
  return (
    <>
          <Routes>

             <Route path='/' element={<Home/>} />
             <Route path='/Products' element={<Products/>} />
             <Route path='/Shopping' element={<Shopping/>} />
             <Route path='/About' element={<About/>} />
             <Route path='/Contact' element={<Contact/>} />
          </Routes>
    </>

  );
}

export default App;
