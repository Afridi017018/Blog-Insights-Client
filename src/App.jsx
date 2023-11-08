import { useState } from "react";
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer/Footer"
import NavBar from "./components/Navbar/Navbar"
import useAuth from "./hooks/useAuth";

function App() {

 const {theme, setTheme} = useAuth();

  if (theme) {
    document.documentElement.setAttribute('data-theme', "dark");
  }
  else {
    document.documentElement.setAttribute('data-theme', "light");
  }


  return (
    <>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>

      <ToastContainer
        position="top-center"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </>
  )
}

export default App
