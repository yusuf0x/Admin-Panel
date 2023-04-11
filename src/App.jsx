import { useState } from 'react'
import Input from './Components/Input'
import ModalComponent from './Components/Modal'

import { Button, DatePicker } from 'antd';
import MainLayout from './Components/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';

function App() {

  return (
    <BrowserRouter>
        <Routes> 
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/admin' element={<MainLayout/>}>
                <Route index element={<Dashboard/>}/>
                {/* <Route path='' element={<} */}
            </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App
