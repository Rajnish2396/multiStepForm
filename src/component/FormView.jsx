import React, { useContext, useState } from 'react';
import InputTextField from './formField/InputTextField';
import { Context } from './contexts/Context';
import InputFile from './formField/InputFile';
import TextArea from './formField/TextArea';

export default function FormView() {
  const contextData = useContext(Context);

  const [err, setError] = useState({});
  const [inpValue, setInpValue] = useState({});

  const { activeNo, setActiveNo } = contextData;

  const validError = () => {
    const errors = {};

    // Step 1 Validation
    if (activeNo === 1) {
      if (!inpValue.name || inpValue.name.trim().length < 3) {
        errors.name = 'Name must be at least 3 characters.';
      }
      if (!inpValue.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inpValue.email)) {
        errors.email = 'Invalid email address.';
      }
      if (!inpValue.dob) {
        errors.dob = 'Date of birth is required.';
      }
      if (!inpValue.contactNumber || inpValue.contactNumber.length !== 10) {
        errors.contactNumber = 'Contact number must be 10 digits.';
      }
    }

    // Step 2 Validation
    if (activeNo === 2) {
      if (!inpValue.markSheet10) {
        errors.markSheet10 = '10th Marksheet is required.';
      } 
      if (!inpValue.markSheet12) {
        errors.markSheet12 = '12th Marksheet is required.';
      } 
      if (!inpValue.graduationMarkSheet) {
        errors.graduationMarkSheet = 'Graduation Marksheet is required.';
      }
    }

    setError(errors);

    return Object.keys(errors).length === 0;
  };

  const submitData = () => {
    if (validError()) {
      console.log('Form Submitted:', inpValue);
      setActiveNo(activeNo + 1);
    } else {
      console.log('Validation Failed:', err);
    }
  };

  const handlePrevious = () => {
    setError({});
    setActiveNo(activeNo - 1);
  };

  return (
    <div className="lg:col-span-3 min-h-screen p-3 md:pt-9 md:pb-5 md:px-5">
      <div className="w-full md:w-10/12 mx-auto">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="bg-cyan-50 w-full grid gap-2 p-4 md:p-6">
            <h1 className="text-xl md:text-3xl font-bold">
              Name of the Enquiry Form
            </h1>
            <p>Provide the following information to process your application</p>
          </div>

          <div className="bg-white p-4 md:p-9">
            {activeNo === 1 ? (
              <>
                <InputTextField
                  placeholder="Enter a Valid Name"
                  labelName="Name *"
                  type="text"
                  name="name"
                  id="name"
                  inpValue={inpValue}
                  setInpValue={setInpValue}
                  err={err.name}
                />
                <InputTextField
                  placeholder="Example-userid@gmail.com"
                  labelName="Email *"
                  type="email"
                  name="email"
                  id="email"
                  inpValue={inpValue}
                  setInpValue={setInpValue}
                  err={err.email}
                />
                <InputTextField
                  placeholder="DD/MM/YYYY"
                  labelName="Date of Birth *"
                  type="date"
                  name="dob"
                  id="dob"
                  inpValue={inpValue}
                  setInpValue={setInpValue}
                  err={err.dob}
                />
                <InputTextField
                  placeholder="Enter Your 10 Digit Contact Number"
                  labelName="Contact *"
                  type="number"
                  name="contactNumber"
                  id="contactNumber"
                  inpValue={inpValue}
                  setInpValue={setInpValue}
                  err={err.contactNumber}
                />
              </>
            ) : activeNo === 2 ? (
              <>
                <InputFile
                  placeholder="Attach your 10th Mark Sheet"
                  labelName="10th MarkSheet *"
                  type="file"
                  name="markSheet10"
                  id="markSheet10"
                  setInpValue={setInpValue}
                  err={err.markSheet10}
                  inpValue={inpValue}
                />
                <InputFile
                  placeholder="Attach your 12th Mark Sheet"
                  labelName="12th MarkSheet *"
                  type="file"
                  name="markSheet12"
                  id="markSheet12"
                  setInpValue={setInpValue}
                  err={err.markSheet12}
                  inpValue={inpValue}
                />
                <InputFile
                  placeholder="Attach your Graduation Mark Sheets"
                  labelName="Graduation MarkSheet *"
                  type="file"
                  name="graduationMarkSheet"
                  id="graduationMarkSheet"
                  setInpValue={setInpValue}
                  err={err.graduationMarkSheet}
                  inpValue={inpValue}
                />
              </>
            ) : (
              <>
              
              <TextArea 
        placeholder={"Enter a description for the long answer"} 
        labelName = {"Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn"} 
        type={"file"} 
        name="description" 
        setInpValue={setInpValue}
        value={inpValue} // Avoid 'value' attribute for file inputs
        id="description" />
   
      
              </>
            )}
          </div>

          <div className="py-5 px-8 flex justify-between">
            {activeNo > 1 && (
              <button
                className="py-3 w-36 bg-gray-400 rounded-sm text-white"
                onClick={handlePrevious}
              >
                Prev
              </button>
            )}
            <button
              className="py-3 w-36 bg-blue-400 rounded-sm text-white"
              onClick={submitData}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
