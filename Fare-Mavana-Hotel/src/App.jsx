import { Route, Routes, useNavigate } from 'react-router-dom'

import './App.css'
import { AuthProvider } from './context/authContext'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import TypeChoise from './components/Catalog/TypeChoise/TypeChoise'
import AdminPanel from './components/Login/AdminPanel/AdminPanel'
import AddRoom from './components/Add room/AddRoom'
import RoomDetails from './components/RoomDetails/RoomDetails'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Logout from './components/Logout/logout'

function App() {
 

  return (
    <div className="site">

      <AuthProvider >

        <Header sticky="top" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addRoom" element={<AddRoom />} />
          <Route path="/roomsCatalog" element={<TypeChoise />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
        <Footer />
      </AuthProvider>
    </div>

  )
}

export default App
