import './App.css';
import 'boxicons';
import { Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs"
import Footer from "./components/Footer/Footer"
import ContactUs from "./components/ContactUs/ContactUs"
import TalentAcq from "./components/WhatWeOffer/TalentAcq/TalentAcquisitionServices"
import ExecutiveSearch from './components/WhatWeOffer/ExecutiveSearch/ExecutiveSearch';
import CommonPage from './components/WhatWeOffer/CommonPage/CommonPage';
// import { withRouter } from 'react-router';
function App() {
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
            <a href="/aboutUs"> About Us</a>
          </li>
          <li>
            <a href="/Contact"> Contact</a>
          </li>
        </ul>
      </nav>
    <Routes>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<AboutUs/>} path="/aboutUs"></Route>
        <Route element={<ContactUs/>} path="/Contact"></Route>
        <Route element={<TalentAcq/>} path="/talentAcquisitionServices"></Route>
        <Route element={<CommonPage/>} path="/recruitmentProcess"></Route>
        <Route element={<CommonPage/>} path="/internationalRecruitment" ></Route>
        <Route element={<CommonPage/>} path="/startupHiring"></Route>
        <Route element={<CommonPage/>} path="/contractStaffing"></Route>
        <Route element={<ExecutiveSearch/>} path="/executiveSearch"></Route>
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
