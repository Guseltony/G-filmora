import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { MovieContextProvider } from './context/MovieContext.jsx'


createRoot(document.getElementById('root')).render(
  <Router>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </Router>
)
