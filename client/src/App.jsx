import { BrowserRouter, Route, Routes } from "react-router-dom";
import HoemPage from "./pages/HomePage/HoemPage";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/AuthPages/SignUp";
import SignIn from "./pages/AuthPages/SignIn";

export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {

      setShowNavBar(false);
    } else {

      setShowNavBar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const shouldShowNavBar = !location.pathname.startsWith("/Dashboard");
  return (
    <BrowserRouter>
        {shouldShowNavBar && (
          <div
            className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
              showNavBar ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <Nav />
          </div>
        )}
      <Routes>
        <Route path="/" element={<HoemPage /> }/>
        <Route path="/register" element={<SignIn /> } />
        <Route path="/signin" element={<SignUp /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}