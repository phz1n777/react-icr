import NavBar from './components/NavBar'
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App