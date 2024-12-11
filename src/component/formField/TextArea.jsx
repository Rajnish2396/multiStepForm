import React, { useState } from 'react'

export default function TextArea({

  labelName, 
  name, 
  placeholder,
  id,  
  setInpValue,
  inpValue, 
  err 
}) {


  function inputHandler(e) {
    const { name, value } = e.target;
    setInpValue((prev) => ({
      ...prev,
      [name]:  value, // Handle file and non-file inputs correctly
    }));
  }
  return (
<div className='grid gap-4'>
    <div>{labelName}</div>



 <textarea className='w-full rounded-sm border border-slate-200 outline-0 box-ring-0 p-2 md:p-4' 
  name={name} 
  id={id}
  placeholder={placeholder} value={inpValue} onChange={inputHandler}></textarea>
  {err?  <div className='text-red-500 text-lg'>err</div> :null}
 
  </div>

  )
}
