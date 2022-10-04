import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Currencies from './components/Currencies';
import News from './components/News';
import ContactUs from './components/ContactUs';
import Main from './components/Main';
import ErrorPage from './components/ErrorPage';

const App = () => {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Main />} />
          <Route exact path="/currencies" element={<Currencies />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/" element={<Login />} />
          <Route path='*' element= {<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App