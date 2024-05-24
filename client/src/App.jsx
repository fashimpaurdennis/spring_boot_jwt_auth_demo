import { Route, Routes } from 'react-router-dom'
import Layout from './views/Layout'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import RequireAuth from './components/RequireAuth'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<RequireAuth />}>
          <Route path="" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* Create Auction */}
        </Route>
      </Route>
    </Routes>
  )
}

export default App
