import React, {  useContext, useState } from 'react'
import DetailsForm from './DetailsForm'
import DocumentCollection from './DocumentCollection'
import StatementPurpose from './StatementPurpose'
import {Context} from "./contexts/Context" 


export default function FormView() {
    let contextData = useContext(Context);
    let{activeNo, setActiveNo, formData, inputData}=contextData
    // const[activeNo, setActiveNo]=useState(1);
    console.log(inputData)
    function submitData(){
        setActiveNo(activeNo+1)
        // !formData.DetailsForm? alert('please fill Data'): setActiveNo(activeNo+1)
    }
    return (
        <div className='lg:col-span-3 min-h-screen p-3 md:pt-9 md:pb-5 md:px-5'>
            <div className='w-full md:w-10/12 mx-auto'>
            <div className='bg-white shadow-sm rounded-lg overflow-hidden'>
                
                {/* Form Heading*/}
                <div className='bg-cyan-50 w-full grid gap-2 p-4 md:p-6'>
                    <h1 className='text-xl md:text-3xl font-bold'>Name of the Enquiry Form</h1>
                    <p>Provide the following information to process your application</p>
                </div>
                {/* End Form Heading*/}

                <div className='bg-white p-4 md:p-9'>
                   {
                  activeNo ==1?  <DetailsForm />: 
                  activeNo ==2 ? <DocumentCollection /> : 
                  activeNo ==3?<StatementPurpose />:null
                    
                } 
                </div>
                <div className='py-5 px-8  flex justify-end'>
                <button onClick={submitData} className='py-3 w-36 bg-blue-400 rounded-sm text-white'>Next</button>
                </div>

            </div>
            </div>

        </div>
    )
}
