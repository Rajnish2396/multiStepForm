import React from 'react'
import InputTextField from './formField/InputTextField'


export default function DetailsForm() {
 

  return (
    <div  className='grid gap-4'>

        <InputTextField 
        placeholder={"Enter a Valid Name"} 
        labelName = {"Name *"} 
        type={"text"} 
        name="name" 
        id="name" />

        <InputTextField 
        placeholder={"Example-userid@gmail.com"} 
        labelName = {"Email *"}  
        type={"email"} 
        name="email" 
        id="email" />

        <InputTextField 
        placeholder={"DD/MM/YYY"} 
        labelName = {"Date of Birth *"}  
        type={"date"} 
        name="dob" 
        id="dob" />

        <InputTextField 
        placeholder={"Enter Your 10 Digit Contact Number "} 
        labelName = {"Contact *"}  
        type={"number"} 
        name="contactNumber" 
        id="contactNumber" />
        
    </div>
  )
}
