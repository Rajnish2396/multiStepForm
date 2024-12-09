import React, { useState } from 'react'

export default function TextArea({placeholder, labelName, type, name, id}) {
    const [err, setError]=useState(false)
  return (
<div className='grid gap-4'>
    <div>{labelName}</div>
  <textarea className='w-full rounded-sm border border-slate-200 outline-0 box-ring-0 p-2 md:p-4' 
  name={name} 
  id={id}
  type={type}
  placeholder={placeholder} />
  {err?  <div className='text-red-500 text-lg'>err</div> :null}
 
  </div>

  )
}
