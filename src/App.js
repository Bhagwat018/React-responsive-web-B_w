import React from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import { Routes, Route} from "react-router-dom";
import Main from './components/Main';
import Main2 from './components/Main2';
import Service from './components/Service';


const App = () => {
  return (
    <div>
      <Header/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/contect" element={<Main2 />} />
       <Route path="/service" element={<Service />} />
       {/* <Main/> */}
     
      </Routes>
    </div>
  )
}

export default App
