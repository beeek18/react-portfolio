import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import FullProject from './pages/FullProject'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import ScrollToTop from './utils/scrollToTop'

import './styles/main.css'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<FullProject />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App;
