import React from 'react';

export default function InputFile({ 
 
  labelName, 
  name, 
  type,
  id,  
  setInpValue,
  inpValue, 
  err 
}) {
  function inputHandler(e) {
      const { name, files } = e.target;

    setInpValue((prev) => ({
      ...prev,
      [name]: files[0].name, // Handle file and non-file inputs correctly
    }));
  }

  return (
    <div className="grid gap-2 pb-4">
      <label htmlFor={id}>{labelName}</label>
      <div className="relative">
      <input
        className="w-full rounded-sm border border-slate-200 outline-0 p-2 md:p-3 text-white"
        name={name}
        id={id}
        onChange={inputHandler}
        type={type}
      />
      <label className='absolute top-4 left-[16%]'>{inpValue[name]}</label>
      </div>
      {err && <div className="text-red-500 text-lg">{err}</div>}
    </div>
  );
}
