import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Interests from './components/Interests'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}