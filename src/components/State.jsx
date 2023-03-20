import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var [par, setpar] = useState("Neeraj")
    const cha = () => {
        setpar("Strange");
    }
    return (
        <div>
            <Typography>Welcome {par}</Typography>
            <Button variant='contained' onClick={cha}>Change</Button>
        </div>
    )
}

export default State
