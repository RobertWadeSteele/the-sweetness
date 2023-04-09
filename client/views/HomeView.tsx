import React from 'react'

let num = 0

const log = function() {
    num += 1
    console.log(num)
}

const HomeView = () => {
    return (
        <div>
            <h1>Test Home View</h1>
            <button onClick={log}>Count {num}</button>
        </div>
    )
}

export default HomeView