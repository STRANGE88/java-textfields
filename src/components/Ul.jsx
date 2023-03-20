import { Button, TextField, Typography } from '@mui/material'
import React, { useInsertionEffect, useState } from 'react'

const Ul = () => {
    var [par, setpar] = useState("")
    const change = (event) =>{
       const{name,value} = event.target;
       setpar(value);
    }
    useInsertionEffect(()=>{
        setpar("[enter name]")
    })
  return (
    <div>
      <Typography variant='h3'>My Name Is {par}</Typography>
      <TextField id="outlined-ibasc" label="ENTER NAME" onChange={(e) => change(e)} variant="outlined" />
      <br></br>
      <br></br>
      

    </div>
  )
}

export default Ul
