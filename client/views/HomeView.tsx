import React from 'react'

const log = function() {
    console.log("Hello!")
}

const HomeView = () => {
    return (
        <div>
            <h1>Home View</h1>
            <button onClick={log}>Hello!</button>
        </div>
    )
}

export default HomeView