import React, { useContext, useState } from 'react';
import InputTextField from './formField/InputTextField';
import { Context } from './contexts/Context';
import InputFile from './formField/InputFile';

export default function FormView() {
  const contextData = useContext(Context);

  const [err, setError] = useState({});
  const [inpValue, setInpValue] = useState({});

  const { activeNo, setActiveNo } = contextData;

  const validError = () => {
    const errors = {};

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
    setError({})
    setActiveNo(activeNo - 1)
  }

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
      
                <InputTextField
                  placeholder="Attach your 10th Marksheet"
                  labelName="10th MarkSheet *"
                  type="file"
                  name="markSheet10"
                  id="markSheet10"
                  setInpValue={setInpValue}
                  err={err.markSheet10}
                />
                <InputTextField
                  placeholder="Attach your 12th Marksheet"
                  labelName="12th MarkSheet *"
                  type="file"
                  name="markSheet12"
                  id="markSheet12"
                  setInpValue={setInpValue}
                  err={err.markSheet12}
                />
              </>
            ) : (
              <p>Step {activeNo}</p>
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
