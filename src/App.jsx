import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/loginPage'
import AdminPage from './pages/adminPage'
import { Toaster } from 'react-hot-toast'
import TestPage from './test'
import RegisterPage from './pages/register'
import HomePage from './pages/homePage'

function App() {
  
  return (
    <BrowserRouter>
    <Toaster position="top-center" /> 
      <Routes path="/*">
        <Route path="/*" element= {<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
