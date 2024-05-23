import { Route, Routes } from 'react-router-dom'
import Layout from './views/Layout'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import RequireAuth from './components/RequireAuth'
import Dashboard from './components/dashboard/Dashboard'
import ItemForm from './components/dashboard/ItemForm'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<RequireAuth />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="items/new" element={<ItemForm />} />
          {/* Create Auction */}
        </Route>
      </Route>
    </Routes>
  )
}

export default App
