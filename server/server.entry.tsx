// import root app to be rendered
import express from 'express'
import dotenv from 'dotenv'
import React from 'react'
import path from 'path'

import { renderToPipeableStream, renderToString } from 'react-dom/server'

// import types
import { Request, Response } from 'express'

// import components
import App from '../client/App'

// setup environment variables
dotenv.config()

// initialize app and define port
const app = express()
const port = process.env.PORT || 3000

// ----------------------------- Setup Dev Environment -------------------------- \\
// if (process.env.NODE_ENV === "development") {
//   // source: https://dev.to/cassiolacerda/automatically-refresh-the-browser-on-node-express-server-changes-x1f680-1k0o
//   const liveReload = require('livereload')

//   const liveReloadServer = liveReload.createServer()
//   liveReloadServer.watch(path.join(__dirname, 'dist'))

//   const connectLiveReload = require('connect-livereload')

//   app.use(connectLiveReload())
// }

let publicPath = path.join(__dirname, '..', 'public')

app.use('/public', express.static(publicPath))

app.get('/', (request: Request, response: Response) => {
  const { pipe } = renderToPipeableStream(<App />, {
    bootstrapScripts: ['public/bundle.js'],
    onShellReady() {
      // response.setHeader('content-type', 'text/html')
      pipe(response)
    }
  })
})

// ------------------------- Listen -------------------------- \\
app.listen(port, () => {
  console.log(`Server now listening at http://localhost:${port}`)
})