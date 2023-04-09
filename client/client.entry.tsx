import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import React from 'react'

import App from './App'


hydrateRoot(
    document,
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
