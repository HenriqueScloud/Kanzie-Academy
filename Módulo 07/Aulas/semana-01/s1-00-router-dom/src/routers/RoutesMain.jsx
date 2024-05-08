import {Routes,Route} from 'react-router-dom'
import { HomePage } from '../pages/homePage'
import { ContactPage } from '../pages/ContactPage'
import { AboutPage } from '../pages/AboutPage';

export const RoutesMain = () =>{
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ContactPage" element={<ContactPage />} />
                <Route path="/AboutPage" element={< AboutPage />} />
            </Routes>
        </>
    );
}