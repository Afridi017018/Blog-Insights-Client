import { Outlet } from "react-router-dom"
import NavBar from "./components/Navbar/Navbar"

function App() {


  return (
    <div>
     <NavBar />
     <Outlet />
    </div>
  )
}

export default App
