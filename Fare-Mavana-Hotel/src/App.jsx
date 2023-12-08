import { Route, Routes, useNavigate } from 'react-router-dom'

import './App.css'
import { AuthProvider } from './context/authContext'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import AddRoom from './components/Add room/AddRoom'
import RoomDetails from './components/RoomDetails/RoomDetails'
//import Login from './components/Login/Login'


import Register from './components/Register/Register'
import Logout from './components/Logout/logout'
import EditRoom from './components/EditRoom/EditRoom'
import ErrorBoundary from './components/ErrorBoudary/ErrorBoundary'
import AuthGuard from './components/Guards/AuthGuard'
import Login from './components/Login/Login'
import Catalog from './components/Catalog/Catalog'

function App() {


  return (
    <div className="site">
      <ErrorBoundary>
        <AuthProvider >

          <Header sticky="top" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roomsCatalog" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<AuthGuard />}>
              <Route path="/addRoom" element={<AddRoom />} />
              <Route path="/rooms/:id" element={<RoomDetails />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/rooms/:id/edit" element={<EditRoom />} />
            </Route>
          </Routes>

          <Footer />
        </AuthProvider>
      </ErrorBoundary>
    </div>

  )
}

export default App
