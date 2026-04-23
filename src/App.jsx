import React from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import {
      BrowserRouter,
      Routes,
      Route
} from 'react-router-dom'

const App = () => {
  return (
    <>
     <BrowserRouter>
       
       <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
       </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
