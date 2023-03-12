import React from "react"
import HomeView from './views/HomeView'

const App = () => {
    return(
        <html>
            <head>
                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta name='description' content='React App from Scratch' />
                <meta name='author' content='Robert Steele' />
                <title>React App from Scratch</title>
                <script src="public/bundle.js"></script>
            </head>
            <body>
                <HomeView></HomeView>
            </body>
        </html>
        // <HomeView />
    )   
}

export default App