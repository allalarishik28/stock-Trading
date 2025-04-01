import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landingpage/home/HomePage';
import{BrowserRouter,Routes,Route} from 'react-router-dom';

// import HomePage from "./landing_page/home/HomePage";
import Signup from "./landingpage/signup/Signup";
import About from "./landingpage/about/AboutPage";
import ProductPage from "./landingpage/products/ProductPage";
import Pricingpage from "./landingpage/pricing/Pricingpage";
import SupportPage from "./landingpage/support/SupportPage";
import NotFound from "./landingpage/NotFound";
import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";
import Login from "./landingpage/signup/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<Pricingpage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


// reportWebVitals();
