import About from "./about/About"
import ParentContainer from "./card/ParentContainer"
import Loader from "./components/Loader"
import FrontPage from "./front/FrontPage"
import Home from "./home/Home"
import Navbar from "./navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
