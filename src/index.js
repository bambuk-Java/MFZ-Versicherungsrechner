import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './components/landing/landingpage.js';
import AbtCar from './components/aboutcar/abtcar.js';
import AbtPerson from './components/abtperson/abtperson.js';
import AbtInsurance from './components/abtInsurance/abtInsurance.js';
import Layout from './components/globalvars/layout.js';
import AboutUs from './components/Company/aboutUs.js';
import Contact from './components/Company/contact.js';
import Faq from './components/Company/faq.js';
import InsuranceResultPage from './components/ergebnis.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/aboutcar" element={<AbtCar />} />
            <Route path="/aboutperson" element={<AbtPerson />} />
            <Route path="/aboutinsurance" element={<AbtInsurance />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/ergebnis" element={<InsuranceResultPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
