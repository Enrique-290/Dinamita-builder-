import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Welcome from './pages/Welcome.jsx'
import Selector from './pages/Selector.jsx'
import GymPanel from './panels/GymPanel.jsx'
import StorePanel from './panels/StorePanel.jsx'
import CafePanel from './panels/CafePanel.jsx'
import ArtisanPanel from './panels/ArtisanPanel.jsx'
import GroceryPanel from './panels/GroceryPanel.jsx'
import { AuthProvider, useAuth } from './lib/auth.jsx'

function PrivateRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div className="p-8 text-center">Cargando...</div>
  return user ? children : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<PrivateRoute><Welcome /></PrivateRoute>} />
        <Route path="/selector" element={<PrivateRoute><Selector /></PrivateRoute>} />
        <Route path="/panel/gimnasio" element={<PrivateRoute><GymPanel /></PrivateRoute>} />
        <Route path="/panel/tienda" element={<PrivateRoute><StorePanel /></PrivateRoute>} />
        <Route path="/panel/cafeteria" element={<PrivateRoute><CafePanel /></PrivateRoute>} />
        <Route path="/panel/artesano" element={<PrivateRoute><ArtisanPanel /></PrivateRoute>} />
        <Route path="/panel/abarrotes" element={<PrivateRoute><GroceryPanel /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  )
}
