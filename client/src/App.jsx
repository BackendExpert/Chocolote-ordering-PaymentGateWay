import { BrowserRouter, Route, Routes } from "react-router-dom";
import HoemPage from "./pages/HomePage/HoemPage";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/AuthPages/SignUp";
import SignIn from "./pages/AuthPages/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import DashHome from "./pages/Dashboard/DashHome";
import CreateProduct from "./pages/Product/CreateProduct";
import ManageProduct from "./pages/Product/ManageProduct";
import PrivateRoute from "./components/Auth/PriveteRoute";
import ManageOneProduct from "./pages/Product/ManageOneProduct";
import PasswordReset from "./pages/AuthPages/PasswordReset";
import ResetPassword from "./pages/AuthPages/ResetPassword";

export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {

      setShowNavBar(false);
    } else {

      setShowNavBar(true);
    }
    setIsTopOfPage(currentScrollY === 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const shouldShowNavBar = !location.pathname.startsWith("/Dashboard");
  const shouldShowFooter = !location.pathname.startsWith("/Dashboard");
  return (
    <BrowserRouter>
        {shouldShowNavBar && (
          <div
          className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
            showNavBar ? "translate-y-0" : "-translate-y-full"
          } ${
            isTopOfPage
              ? "bg-transparent transition-colors duration-500"
              : "bg-[#7B3F00] shadow-md transition-colors duration-500"
          }`}
          >
            <Nav />
          </div>
        )}
      <Routes>
        <Route path="/" element={<HoemPage /> }/>
        <Route path="/register" element={<SignUp /> } />
        <Route path="/signin" element={<SignIn /> } />
        <Route path="/PasswordRest" element={<PasswordReset /> } />
        <Route path="/ResetPassword/:token" element={<ResetPassword /> } />
        <Route path="/Dashboard/" element={ <PrivateRoute element={<Dashboard />} />} >
          <Route path="Home" element={<DashHome /> } />
          <Route path="CreateProduct" element={<CreateProduct /> } />
          <Route path="ManageProdcut" element={<ManageProduct /> } />
          <Route path="ManageOneProdcut/:id" element={<ManageOneProduct /> } />
        </Route>
      </Routes>
      {shouldShowFooter && <Footer />}
    </BrowserRouter>
  )
}