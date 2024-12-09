import React from 'react'
import TextArea from './formField/TextArea'

export default function StatementPurpose() {
  return (
    <div  className='grid gap-4'>

        <TextArea 
        placeholder={"Enter a description for the long answer"} 
        labelName = {"Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn"} 
        type={"file"} 
        name="markSheet10" 
        id="markSheet10" />

         <TextArea  
        placeholder={"Enter a description for the long answer"} 
        labelName = {"Tell me about the last time something significant didn't go according to plan at work. What was your role ? What was the outcome"} 
        type={"file"} 
        name="markSheet12" 
        id="markSheet12" />

        
    </div>
  )
}
