import React from 'react'
import InputTextField from './formField/inputTextField'

export default function DocumentCollection() {
  return (
    <div  className='grid gap-4'>

        <InputTextField 
        placeholder={"Attached File 5 Kb"} 
        labelName = {"10th MarkSheet *"} 
        type={"file"} 
        name="markSheet10" 
        id="markSheet10" />

        <InputTextField 
        placeholder={"Attached File 5 Kb"} 
        labelName = {"12th MarkSheet *"} 
        type={"file"} 
        name="markSheet12" 
        id="markSheet12" />

        <InputTextField 
        placeholder={"Attached File 5 Kb"} 
        labelName = {"Graduation MarkSheet *"} 
        type={"file"} 
        name="markSheetGraduation" 
        id="markSheetGraduation"  />

        <InputTextField 
        placeholder={"Attached File 5 Kb"} 
        labelName = {"Post Graduation MarkSheet *"} 
        type={"file"} 
        name="markSheetPostGraduation" 
        id="markSheetPostGraduation"  />

        <InputTextField 
        placeholder={"Attached File 5 Kb"} 
        labelName = {"Offer Letter *"} 
        type={"file"} 
        name="offerLetter" 
        id="offerLetter"  />
        
    </div>
  )
}
