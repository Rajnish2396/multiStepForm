import React from 'react';

export default function InputFile({ 
 
  labelName, 
  name, 
  id,  
  setInpValue, 
  err 
}) {
  function inputHandler(e) {
    
    const { name, files } = e.target;
    // console.log(e.target.files[0])

    setInpValue((prev) => ({
      ...prev,
      [name]: files[0], // Handle file and non-file inputs correctly
    }));
  }

  return (
    <div className="grid gap-2 pb-4">
      <label htmlFor={id}>{labelName}</label>
      <input
        className="w-full rounded-sm border border-slate-200 outline-0 p-2 md:p-3"
        name={name}
        id={id}
        onChange={inputHandler}
        type={type}
        placeholder={placeholder}
      />
      {err && <div className="text-red-500 text-lg">{err}</div>}
    </div>
  );
}
