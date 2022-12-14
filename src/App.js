import "./App.css";
import FooterSection from "./Components/Footer";
import HomeSection from "./Components/Home";
import NavbarSection from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Components/Pages/AboutPage";
import ContactPage from "./Components/Pages/ContactPage";
import SinglePost from "./Components/SinglePost";
import SignUp from "./Components/SignUp";
import LoginPage from "./Components/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarSection />
        <Routes>
          <Route path="/" element={<HomeSection />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route path="post/:id/:name" element={<SinglePost />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
