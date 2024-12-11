import React, {  useContext} from 'react'

import DocumentCollection from './DocumentCollection'
import StatementPurpose from './StatementPurpose'
import {Context} from "./contexts/Context" 


export default function FormView() {

    let contextData = useContext(Context);

    let{activeNo, setActiveNo, formData, inputData}=contextData
  
 
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
                              

                activeNo ==1?  <>
                
                                <InputTextField 
                                setInpValue={setInpValue}
                                inpValue={inpValue}
                                placeholder={"Enter a Valid Name"} 
                                labelName = {"Name *"} 
                                type={"text"} 
                                name="name" 
                                id="name" />

                                <InputTextField 
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
                
                </>: 
                activeNo ==2 ? <DocumentCollection buttonRef={buttonRef} /> : 
                activeNo ==3?<StatementPurpose buttonRef={buttonRef} />:null
                    
                } 
                </div>
                <div className='py-5 px-8  flex justify-end'>
                <button className='py-3 w-36 bg-blue-400 rounded-sm text-white'>Next</button>
                </div>

            </div>
            </div>

        </div>
    )
}
