import { Button, TextField, Typography } from '@mui/material'
import React, { useInsertionEffect, useState } from 'react'

const Text2 = () => {
    var [ip,setip] = useState({fnam:"",lnam:""})
    const inputHandler = (e) =>{
        const {name,value} = e.target
        setip({...ip,[name]:value})
    }
     

  return (
    <div>
      
      <Typography variant='h3'>My Name Is {ip.fnam}</Typography>
      <TextField id="outlined-ibasc" label="ENTER NAME" name='fnam' value={ip.fnam} onChange={inputHandler} variant="outlined" />
      <Typography variant='h3'>My Name Is {ip.lnam}</Typography>
      <TextField id="outlined-ibasc" label="ENTER NAME" name='lnam' value={ip.lnam} onChange={inputHandler} variant="outlined" />
    </div>
  )
}

export default Text2

