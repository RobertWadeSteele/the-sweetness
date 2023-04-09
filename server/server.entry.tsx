// import root app to be rendered
import express from 'express'
import dotenv from 'dotenv'
import React from 'react'
import path from 'path'

import { renderToPipeableStream, renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

// import types
import { Request, Response } from 'express'

// import components
import App from '../client/App'

// setup environment variables
dotenv.config()

// initialize app and define port
const app = express()
const port = process.env.PORT || 3000

let publicPath = path.join(__dirname, '..', 'public')

app.use('/public', express.static(publicPath))

app.get('*', (request: Request, response: Response) => {
  const { pipe } = renderToPipeableStream(<StaticRouter location={request.url}><App /></StaticRouter>, {
    bootstrapScripts: ['public/bundle.js'],
    onShellReady() {
      response.setHeader('content-type', 'text/html')
      pipe(response)
    }
  })
})

// ------------------------- Listen -------------------------- \\
app.listen(port, () => {
  console.log(`Server now listening at http://localhost:${port}`)
})