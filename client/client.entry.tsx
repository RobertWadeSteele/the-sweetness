import { hydrateRoot } from 'react-dom/client'
import React from 'react'
import App from './App'

// const domNode = document.getElementById('root') as Element
// const domNode = document.documentElement

hydrateRoot(document, <App />)
