import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
        <App />
    
    </BrowserRouter>
    {/* lembrar de colocar o browserRouter no main sempre que for usar as rotas do react  */}

  </React.StrictMode>,
)
