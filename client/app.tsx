import React from "react"

import Component from './firstcomponent/component'

const App = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <h3>From inside src/app.tsx, which is bundled to public/bundle.js via Webpack</h3>
            <p>New Paragraph</p>
            <p>Yet another new paragraph</p>
            <Component />
        </div>
    )
}

export default App