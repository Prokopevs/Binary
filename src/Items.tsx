import React from "react"
import { array, arrayOfNumbers } from "./data"
import "./App.css"

type IItemsProps = {
    value: string
}

const Items: React.FC<IItemsProps> = ({ value }) => {
    let ConvertNumber = (number: string) => (from: number) => (to: number) =>
        parseInt(number, from).toString(to)

    const [active, setActive] = React.useState<null | number>(null)
    const [state, setState] = React.useState<null | string>(null)
    const [error, setError] = React.useState(false)

    const count = () => {
        if (active !== null && value !== "" && value) {
            const [from, to] = arrayOfNumbers[active]
            const res = ConvertNumber(value)(from)(to)
            setState(res)
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <>
            <div>
                <ul className="items">
                    {array.map((item, index) => (
                        <li
                            key={index}
                            className={
                                active === index
                                    ? "convert__items active"
                                    : "convert__items"
                            }
                            onClick={() => setActive(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <button onClick={() => count()}>Перевести</button>

            <p>Ответ: {state}</p>

            {error && active == null && (
                <p className="items__error">выберете преобразование</p>
            )}
            {error && value === "" && <p className="items__error">введите число</p>}
        </>
    )
}

export default Items
