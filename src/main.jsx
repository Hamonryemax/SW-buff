import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app/app.jsx'
import './index.css'

import SwapiService from "./services/swapi-service.js";

const swapi = new SwapiService();

swapi.getPlanet(3).then((p) => {
    console.log(p);
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
