import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Val = () => {
    const [sub, setsub] = useState(false)
    var [ip, setip] = useState({ fnam: "" })
    var [nee, setnee] = useState({ fnam: "" })


    const inputHandler = (e) => {
        const { name, value } = e.target
        setip({ ...ip, [name]: value })

    }
    const checkval = () => {
        let errors = nee;

        if (!ip.fnam.trim()) {
            errors.fnam = "first";
        }
        else {
            errors.fnam = "";
        }
        setnee(errors);
    }
   useEffect(()=>{
    checkval()
   })
        const hSubmit = (e) =>{

            e.preventDefault();
            setsub(true);
        }

    return (
        <div>
            <form 
            onSubmit={hSubmit}>
            <Typography>Welcome {ip.fnam} </Typography>
            <TextField id="outlined-ibasc" label="ENTER NAME"
                name='fnam' value={ip.fnam} onChange={inputHandler}
                variant="outlined"></TextField>
                <br></br>
            {(nee.fnam && sub) && <p>{nee.fnam}</p>}
            <br></br><br></br>  <Button type='submit' variant='contained' >ENTER</Button>
            </form>
        </div>
    )
}

export default Val
