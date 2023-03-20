import { Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'


const Hhh = () => {
    var [par, setpar] = useState("HOME")
    const cha = () => {
        setpar("CONTACT");
    }
    const chan = () => {
        setpar("GALLARY");
    }
    const chang = () => {
        setpar("HOME");
    }

  return (
    <div>
        <br></br><br></br>
       <Typography>Welcome {par}</Typography>
       <Button variant='contained' onClick={cha}>CONTACT</Button>
       <Button variant='contained' onClick={chan}>GALLARY</Button>
       <Button variant='contained' onClick={chang}>HOME</Button>
    </div>
  )
}

export default Hhh
