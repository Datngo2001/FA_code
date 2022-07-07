import React, { useState } from 'react'
import styles from "./counter.module.css"

function Counter() {
    const [count, setCount] = useState(0)

    function handleAdd() {
        setCount(val => val + 1)
    }

    function handleMinus() {
        setCount(val => val + 1)
    }

    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={handleAdd}>+</button>
            <div className={styles.result}>{count}</div>
            <button className={styles.button} onClick={handleMinus}>-</button>
        </div>
    )
}

export default Counter