import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/Sidebar'
import Dashboard from './components/Dashboard'

import Home from './pages/Home'
import Profil from './pages/Profil'
import Settings from './pages/Settings'
import Community from './pages/Community'

import './styles/main.css'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <SideBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profil/:id" element={<Profil />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
