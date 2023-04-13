import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './pages/MainPage'
import { GlobalStyle } from './styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainPage />
    <GlobalStyle />
  </React.StrictMode>,
)
