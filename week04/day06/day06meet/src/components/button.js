import React, {useState} from 'react'

// Stateful components
function Button() {
    const [isClicked, setIsClicked] = useState(false)

    const handleChangeClicked = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div>
            <h1>{isClicked ? "Pressed" : "Released"}</h1>
            <button onClick={handleChangeClicked}>Press Me</button>
        </div>
    )
}

export default Button