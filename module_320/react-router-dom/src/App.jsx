import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Main from './pages/Main'
import Profile from './pages/Profile'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <h1>Test</h1>
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
