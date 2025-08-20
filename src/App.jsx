import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import { Main } from "./components/Main";
import Category from "./components/Category";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Singlequiz from "./components/Singlequiz";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Contactus from "./components/Contactus";

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

const AppLayout = () => {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quiz/:title" element={<Singlequiz />} />
        <Route path="/allquiz" element={<Category />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideNavbar && <Footer />}
    </>
  );
};

export default App;
