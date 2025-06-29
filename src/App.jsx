import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/loginPage'
import AdminPage from './pages/adminPage'
import { Toaster } from 'react-hot-toast'

function App() {
  
  return (
    <BrowserRouter>
    <Toaster position="top-center" /> 
      <Routes path="/*">
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
