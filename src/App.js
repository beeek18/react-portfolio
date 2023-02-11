import './styles/main.css'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Projects />
      <Footer />
    </div>
  )
}

export default App;
