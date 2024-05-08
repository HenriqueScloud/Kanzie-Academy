import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { useForm } from 'react-hook-form';

export const RoutesMain = () =>{
  const { register, handleSubmit } = useForm();
  // console.log(register);

    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage register={register} />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route
            path="/ContactPage"
            element={
              <ContactPage  handleSubmit={handleSubmit} 
                            register={register} />
            }
          />
        </Routes>
      </>
    );
}