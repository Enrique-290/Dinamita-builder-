import { useNavigate } from 'react-router-dom'
import { Dumbbell, Store, Coffee, Hammer, ShoppingBasket } from 'lucide-react'

const options = [
  { name: 'Gimnasio', icon: Dumbbell, path: '/panel/gimnasio' },
  { name: 'Tienda', icon: Store, path: '/panel/tienda' },
  { name: 'Cafetería', icon: Coffee, path: '/panel/cafeteria' },
  { name: 'Artesano', icon: Hammer, path: '/panel/artesano' },
  { name: 'Abarrotes', icon: ShoppingBasket, path: '/panel/abarrotes' },
]

export default function Selector() {
  const nav = useNavigate()

  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Elige el tipo de negocio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {options.map(({ name, icon:Icon, path }) => (
          <button key={name} onClick={()=>nav(path)} className="card text-left">
            <div className="flex items-center gap-4">
              <Icon />
              <div>
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-sm text-neutral-400">Entrar al panel</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
