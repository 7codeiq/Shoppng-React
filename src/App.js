import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import {Home, Products, Shopping ,About ,Contact} from '../src/pages/index'

const App = () => {
  return (
    <>
       <Router>
          <Routes>

             <Route path='/' element={<Home/>} />
             <Route path='/Products' element={<Products/>} />
             <Route path='/Shopping' element={<Shopping/>} />
             <Route path='/About' element={<About/>} />
             <Route path='/Contact' element={<Contact/>} />
          </Routes>
       </Router>
    </>

  );
}

export default App;
