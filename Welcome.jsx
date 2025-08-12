import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth.jsx'

export default function Welcome() {
  const nav = useNavigate()
  const { logout } = useAuth()

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold">¡Bienvenido a tu <span className="text-red-500">DINAMITA</span> app!</h1>
        <p className="text-neutral-300 max-w-xl">Esta es tu plataforma base. Selecciona el tipo de negocio para comenzar.</p>
        <div className="flex items-center justify-center gap-3">
          <button className="btn-primary" onClick={()=>nav('/selector')}>Ir a selector</button>
          <button className="px-4 py-2 rounded-2xl border border-neutral-700" onClick={logout}>Salir</button>
        </div>
      </motion.div>
    </div>
  )
}
