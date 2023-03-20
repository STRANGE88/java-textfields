import { Button, TextField, Typography } from '@mui/material'
import React, { useInsertionEffect, useState } from 'react'

const Text2 = () => {
    var [par,setpar]= useState("")
    const change = (event) =>{
        const{name,value} = event.target;
        setpar(value);
     }
     var [pa,setpa]= useState("mee")
     const chan = (event) =>{
         const{name,value} = event.target;
         setpa(value);
      }
     

  return (
    <div>
      
      <Typography variant='h3'>My Name Is {par}</Typography>
      <TextField id="outlined-ibasc" label="ENTER NAME" onChange={(e) => change(e)} variant="outlined" />
      <Typography variant='h3'>My Name Is {pa}</Typography>
      <TextField id="outlined-ibasc" label="ENTER NAME" onChange={(e) => chan(e)} variant="outlined" />
    </div>
  )
}

export default Text2
