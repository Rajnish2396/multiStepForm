import React, { useState } from 'react'
import AsideBar from './AsideBar'
import FormView from './FormView'
import {Context} from "./contexts/Context"


export default function ContainerForm() {
  const[activeNo, setActiveNo]=useState(1);
  const[formData, setFormData]=useState({})
  const[inputData, setInputData]=useState({})
  
  const contextValue ={
    activeNo, 
    setActiveNo,
    formData,
    setFormData,
    setInputData,
    inputData
  }

  return (
    <div className='w-full min-h-screen bg-gray-200 md:grid md:grid-cols-4 md:gap-4'>
      <Context.Provider value={contextValue}>
      <AsideBar />
      <FormView />
      </Context.Provider>
    </div>
  )
}
