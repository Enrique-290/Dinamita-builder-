# Dinamita Builder (Web App - Vercel)

Base inicial en **React + Vite + Tailwind** con **Firebase Auth** y rutas para paneles por tipo de negocio.

## 🚀 Quick start (local)
```bash
npm i
cp .env.example .env
# Edita .env con tus claves de Firebase
npm run dev
```

## 📦 Deploy en Vercel
1. Sube este ZIP a un repositorio (GitHub) o importa el proyecto directo en Vercel.
2. En Vercel, agrega las **Environment Variables** de `.env` (mismo nombre).
3. Framework Preset: **Vite** (detecto automático).
4. Build Command: `vite build`
5. Output Directory: `dist`

## 🔐 Firebase
- Habilita Authentication -> Sign-in method -> **Email/Password**.
- Crea un usuario de prueba para entrar.
- Después puedes habilitar OAuth, Phone, etc.

## 🧭 Rutas
- `/login` -> Iniciar sesión
- `/welcome` -> Bienvenida
- `/selector` -> Selector de negocio
- `/panel/*` -> Paneles base por negocio

## 🎨 Estilo
- Tema oscuro, acentos rojos (#EF4444), bordes redondeados 2xl y sombras suaves.
- Componentes base en `pages/` y paneles en `panels/`.

## 📁 Estructura
```
src/
  lib/auth.jsx
  pages/{Login,Welcome,Selector}.jsx
  panels/{GymPanel,StorePanel,CafePanel,ArtisanPanel,GroceryPanel}.jsx
  App.jsx, main.jsx, index.css
```

---
Hecho para **Dinamita Builder** 💥
