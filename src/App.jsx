import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Createuser from './components/Createuser'
import EditUser from './components/EditUser'
import Homecrud from './components/Homecrud'
import User from './components/User'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Homecrud/>
             <Routes>
                  <Route path='/' element={<Createuser/>}></Route>
                  <Route path='/users' element={<User/>}></Route>
                  <Route path='/edit/:index' element={<EditUser/>}></Route>
             </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
