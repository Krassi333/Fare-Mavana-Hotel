
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import TypeChoise from './components/Catalog/TypeChoise/TypeChoise'
import AdminPanel from './components/Login/AdminPanel/AdminPanel'
import AddRoom from './components/Add room/AddRoom'
import RoomDetails from './components/RoomDetails/RoomDetails'
import Login from './components/Login/Login'
import { useState } from 'react'
import AuthContext from './context/authContext'

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  }

  return (
    <>

      <AuthContext.Provider value={loginSubmitHandler}>

        <Header sticky="top" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addRoom" element={<AddRoom />} />
          <Route path="/roomsCatalog" element={<TypeChoise />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </AuthContext.Provider>
    </>

  )
}

export default App
