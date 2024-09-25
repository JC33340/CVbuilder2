import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Layout from './Layout.tsx'
import Preview from './pages/Preview.tsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<App />} />
          <Route path = '/preview' element={<Preview />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
