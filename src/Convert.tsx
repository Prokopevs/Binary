import "./App.css"
import React from "react"
import Items from "./Items"

const Convert = () => {
    const [value, setValue] = React.useState("")

    return (
        <div className="App">
            <input
                placeholder="введите число"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></input>

            <Items value={value} />
        </div>
    )
}

export default Convert
