import React, { useState } from "react";
import "./Eightball.css"

const Eightball = (props) => {
    const answers = props.answers
    const [message, setMessage] = useState("Think of a Question")
    const [color, setColor] = useState("Black")

    // Generate random number based on the length of the property answers
    const getRandNum = () => Math.floor(Math.random() * answers.length) + 1;

    const updateBall = (num) => {
        let message = answers[num]["msg"]
        let color = answers[num]["color"]

        setMessage(message)
        setColor(color)

        return { message, color }

    }


    return(
        <div className="Eightball" style={{backgroundColor: color}} onClick={() => updateBall(getRandNum())}>
        <p className="Eightball-p">{message}</p>
    </div>
    )
}


export default Eightball;
