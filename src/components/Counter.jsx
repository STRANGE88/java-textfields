import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {

    var [num, setnum] = useState(0)
    const add = () => {
        setnum(++num)
    }
    const minus = () => {
        setnum(--num)
    }
    return (
        <div>
            <h1>{num}</h1>
            <Button variant='contained' onClick={add}>+</Button>
            <Button variant='contained' onClick={minus}>-</Button>
        </div>
    )
}

export default Counter
