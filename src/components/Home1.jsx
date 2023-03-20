import { Typography } from '@mui/material'
import React from 'react'

const Home = () => {
    var p=["Neeraj","Nikhil","Deepak"]
  return (
    <div>
      <Typography variant="h1">
     Welcome to React
</Typography>;
    <ul>
        {p.map((value,index)=>{
            return <li key={index}>{value}</li>
        })}
    </ul>
    </div>
  )
}

export default Home