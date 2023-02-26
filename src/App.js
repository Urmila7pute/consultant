import './App.css';
import 'boxicons';
import { Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs"
import Footer from "./components/Footer/Footer"
import ContactUs from "./components/ContactUs/ContactUs"

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
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
