import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const profile={
  name:"k-arikawa",
  age:24,
}

const profileContext= createContext(profile)

createRoot(document.getElementById('root')!).render(
  <profileContext.Provider value={profile}>
  <StrictMode>
    <App />
  </StrictMode>,
  </profileContext.Provider>
)

export default profileContext