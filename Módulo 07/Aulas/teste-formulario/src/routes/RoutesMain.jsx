import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { RegisterPage } from '../pages/RegisterPage';
import { useState } from 'react';

export const RoutesMain = () =>{

    const [user,setUser]=useState([])

    return (
      <>
        <Routes>
          <Route path="/HomePage" element={<HomePage user={user}/>}  />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route
            path="/"
            element={<RegisterPage setUser={setUser}/>}
            
          />
        </Routes>
      </>
    );
}