import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './containers/home';
import ContactScreen from './containers/contact';
import AboutScreen from './containers/about';
import RegisterScreen from './containers/register';
import Modules from "./containers/modules";
import Faqs from './containers/faqs';
import Layout from './components/layout';
// import FeeScreen from './containers/fee';
import BrandScreen from './containers/BA';



// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

function MainScreen() {
    return (
        <div className="main_page">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomeScreen />} />
                        <Route path="about" element={<AboutScreen />} />
                        <Route path="contact" element={<ContactScreen />} />
                        <Route path="register" element={<RegisterScreen />} />
                        <Route path="modules" element={<Modules />} />
                        <Route path="faqs" element={<Faqs />} />
                        <Route path="brand-ambassador" element={<BrandScreen />} />
                        {/* <Route path="fee" element={<FeeScreen />} /> */}
                        {/* <Route path="*" element={<NoPage />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainScreen;
