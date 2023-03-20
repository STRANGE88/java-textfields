import React from 'react'

const Num = () => {
    var p=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
       {p.map((value,index)=>{
            return <li key={index}>{value}</li>
        })}
    </div>
  )
}

export default Num
