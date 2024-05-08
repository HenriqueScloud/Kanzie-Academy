import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { RegisterPage } from '../pages/RegisterPage';

export const RoutesMain = () =>{

    

    return (
      <>
        <Routes>
          <Route path="/HomePage" element={<HomePage/>}  />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route
            path="/"
            element={<RegisterPage />}
            
          />
        </Routes>
      </>
    );
}