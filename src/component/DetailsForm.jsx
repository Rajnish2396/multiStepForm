import React, { useEffect, useState } from 'react'
import InputTextField from './formField/InputTextField'


export default function DetailsForm({buttonRef}) {
 let [inpValue, setInpValue]=useState({})

 
  useEffect(()=>{
    const btn = buttonRef.current;
    if(btn){
      btn.addEventListener('click', ()=>{
   
      })
    }
  },[buttonRef])
  console.log(inpValue)

  return (
    <div  className='grid gap-4'>

        <InputTextField 
        setInpValue={setInpValue}
        inpValue={inpValue}
        placeholder={"Enter a Valid Name"} 
        labelName = {"Name *"} 
        type={"text"} 
        name="name" 
        id="name" />

        <InputTextField 
        setInpValue={setInpValue}
        inpValue={inpValue}
        placeholder={"Enter a Valid Name"} 
        labelName = {"Name *"} 
        type={"text"} 
        name="name" 
        id="name" />

        <InputTextField 
         setInpValue={setInpValue}
         inpValue={inpValue}
        placeholder={"Example-userid@gmail.com"} 
        labelName = {"Email *"}  
        type={"email"} 
        name="email" 
        id="email" />

        <InputTextField 
          setInpValue={setInpValue}
          inpValue={inpValue}
        placeholder={"DD/MM/YYY"} 
        labelName = {"Date of Birth *"}  
        type={"date"} 
        name="dob" 
        id="dob" />

        <InputTextField 
              setInpValue={setInpValue}
              inpValue={inpValue}
        placeholder={"Enter Your 10 Digit Contact Number "} 
        labelName = {"Contact *"}  
        type={"number"} 
        name="contactNumber" 
        id="contactNumber" />
        
    </div>
  )
}
