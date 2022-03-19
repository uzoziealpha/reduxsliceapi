import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/index'
import { Route, Routes } from 'react-router-dom'
import DataList from './component/DataList'




function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/datalist/:id' element={<DataList/>} />
    </Routes>
 </div>
    
  )
}

export default App