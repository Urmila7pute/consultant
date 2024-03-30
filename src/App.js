import './App.css';
import 'boxicons';
import { Route, Routes, useLocation, useParams} from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs"
import Footer from "./components/Footer/Footer"
import ContactUs from "./components/ContactUs/ContactUs"
import Careers from "./components/Careers/Careers"
import TalentAcq from "./components/WhatWeOffer/TalentAcq/TalentAcquisitionServices"
import ExecutiveSearch from './components/WhatWeOffer/ExecutiveSearch/ExecutiveSearch';
import CommonPage from './components/WhatWeOffer/CommonPage/CommonPage';
import ProductsAndServices from './components/ProductsAndServices/ProductsAndServices';
import { useState } from 'react';
import CareerDescription from './components/CareerDescription/CareerDescription';
import WhatWeOffer from './components/WhatWeOffer/WhatWeOffer';
import TalentAcquisition from './components/TalentAcquisition/TalentAcquisition';

function App() {
  const [visible, setOpenCloseSidebar] = useState(false)
  const params=useParams()
  const location = useLocation();
  return (
    <div className="App">
        <nav className="nav-bar">
        <div className="logoSection">
          <span className="logo-name">Codeza Solutions Private Limited</span>
        </div>

        <ul className="nav-list">
          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="/productsAndServices">Services</a>
          </li>
          <li>
            <a href="/aboutUs"> About Us</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/Contact"> Contact</a>
          </li>
        </ul>
        <div className='menuIcon' onClick={()=>setOpenCloseSidebar(!visible)}>
          <box-icon name='menu'></box-icon>
        </div>
        {visible && <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onClick={()=>setOpenCloseSidebar(!visible)}>&times;</a>
          <a href="/"> Home</a>
          <a href="/productsAndServices">Services</a>
          <a href="/aboutUs"> About Us</a>
          <a href='/careers'>Careers</a>
          <a href="/Contact"> Contact</a>
        </div>}
        
      </nav>
    <Routes>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<AboutUs/>} path="/aboutUs"></Route>
        <Route element={<WhatWeOffer/>} path='/whatweoffer' ></Route>
        <Route element={<TalentAcquisition/>} path='/talentacquisition' ></Route>

        <Route element={<ProductsAndServices/>} path="/productsAndServices"></Route>
        <Route element={<ContactUs/>} path="/Contact"></Route>
        <Route element={<Careers/>} path="/careers"></Route>
        <Route element={<TalentAcq/>} path="/talentAcquisitionServices"></Route>
        <Route element={<CommonPage/>} path="/recruitmentProcess"></Route>
        <Route element={<CommonPage/>} path="/internationalRecruitment" ></Route>
        <Route element={<CommonPage/>} path="/startupHiring"></Route>
        <Route element={<CommonPage/>} path="/contractStaffing"></Route>
        <Route element={<ExecutiveSearch/>} path="/executiveSearch"></Route>
        <Route element={<CareerDescription params={params} location={location}  />}
        path={`/careers/:id`}></Route>
        <Route
            path="*"
            element={
              <div className='notFound'>
                <h2 className='notFoundh2'>404 Page not found</h2>
              </div>
            }
          />
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
