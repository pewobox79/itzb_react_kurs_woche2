import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <MainLayout>
      <App />
    </MainLayout>
)
