import React, { useState } from 'react'

const Accordion = ({title,description}) => {
  const [status,setStatus]=useState(false);
  const add=()=>{
    setStatus(!status)
    // console.log("SS",status);
  }
  return (
    <div className='inner-container'>
        <div className='title'>{title}
        <span className='addTittle' onClick={add}> {!status ? "➕" :"➖"}</span> 
        </div>
      {status &&  <div className='descrip'>{description}</div>}
    </div>
  )
}

export default Accordion