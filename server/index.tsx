// import root app to be rendered
import App from '../client/app'

// import packages
import path from 'path'
import express, { Request, Response } from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

// setup environment variables
require('dotenv').config()

// initialize app and define port
const app = express()
const port = process.env.PORT || 3000

// if environment is dev enable live browser reloads
if (process.env.NODE_ENV === "development") {
  // source: https://dev.to/cassiolacerda/automatically-refresh-the-browser-on-node-express-server-changes-x1f680-1k0o
  const livereload = require("livereload")
  const connectLiveReload = require("connect-livereload")
  const liveReloadServer = livereload.createServer()
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/")
    }, 100)
  })
  app.use(connectLiveReload())
}

// app.use('/static', express.static(path.join(__dirname, '..', 'dist')))
app.get('/', (req: Request, res: Response) => {
  const component = ReactDOMServer.renderToString(<App />)
  const html = `
    <!DOCTYPE html>
    <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <meta name='description' content='React App from Scratch'>
            <meta name='author' content='Robert Steele'>
            <title>React App from Scratch</title>
        </head>
        <body>
            <div id='root'>${component}</div>
            <script src='bundle.js'></script>
        </body>
    </html>
  `
  res.send(html)
})

app.listen(port, () => {
  console.log(`Server now listening at http://localhost:${port}`)
})