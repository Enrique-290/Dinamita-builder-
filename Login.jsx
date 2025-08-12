import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth.jsx'
import { Rocket } from 'lucide-react'

export default function Login() {
  const { login } = useAuth()
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      nav('/welcome')
    } catch (err) {
      setError('Error al iniciar sesión. Verifica tus datos.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="w-full max-w-md card border-neutral-800">
        <div className="flex items-center gap-3 mb-6">
          <Rocket className="text-red-500" />
          <h1 className="text-2xl font-bold">Dinamita Builder</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Correo</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full px-3 py-2 rounded-2xl bg-neutral-900 border border-neutral-800 outline-none" placeholder="tu@correo.com" />
          </div>
          <div>
            <label className="block text-sm mb-1">Contraseña</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required className="w-full px-3 py-2 rounded-2xl bg-neutral-900 border border-neutral-800 outline-none" placeholder="••••••••" />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button className="btn-primary w-full" disabled={loading}>{loading ? 'Entrando...' : 'Entrar'}</button>
        </form>
        <p className="text-xs text-neutral-400 mt-4">Demo: crea un usuario en Firebase Authentication (Email/Password).</p>
      </div>
    </div>
  )
}
