import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import SampleComponent from './components/SampleComponent/SampleComponent'
import SignupPage from './pages/SignupPage/SignupPage'
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/leaderboard' element={<LeaderboardPage />} />

                {/* Routes that need auth */}
                <Route element={<ProtectedRoute />}>
                    <Route path='/sample' element={<SampleComponent />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
