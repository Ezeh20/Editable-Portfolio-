import { Route, Routes } from 'react-router-dom'
import Signup from './pages/signup'
import Login from './pages/login'
import Portfolio from './pages/portfolio'

function App() {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    )
}

export default App
