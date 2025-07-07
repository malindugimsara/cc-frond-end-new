import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/loginPage'
import AdminPage from './pages/adminPage'
import { Toaster } from 'react-hot-toast'
import TestPage from './test'

function App() {
  
  return (
    <BrowserRouter>
    <Toaster position="top-center" /> 
      <Routes path="/*">
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/test" element={<TestPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
