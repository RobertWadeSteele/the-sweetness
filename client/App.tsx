import React from "react"
import { Routes, Route } from "react-router"

import HomeView from './views/HomeView'
import AboutView from './views/AboutView'

const App = () => {
    return(
        <html>
            <head>
                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta name='description' content='React App from Scratch' />
                <meta name='author' content='Robert Steele' />
                <title>React App from Scratch</title>
            </head>
            <body>
                <Routes>
                    <Route path='/' element={<HomeView />} />
                    <Route path='about' element={<AboutView />} />
                </Routes>
            </body>
        </html>
    )   
}

export default App