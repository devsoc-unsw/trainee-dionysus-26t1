import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import LoginPage from './pages/LoginPage/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/signup' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
