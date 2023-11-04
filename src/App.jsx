import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/Navbar/Navbar"

function App() {


  return (
    <div>
     <NavBar />
     <Outlet />
     <Footer />
    </div>
  )
}

export default App
