import React from 'react';

export default function InputTextField({ 
  placeholder, 
  labelName, 
  type, 
  name, 
  id, 
  inpValue, 
  setInpValue, 
  err 
}) {
  function inputHandler(e) {
    
    const { name, value, files } = e.target;
    // console.log(e.target.files[0])

    setInpValue((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value, // Handle file and non-file inputs correctly
    }));
  }

  return (
    <div className="grid gap-2 pb-4">
      <label htmlFor={id}>{labelName}</label>
      <input
        className="w-full rounded-sm border border-slate-200 outline-0 p-2 md:p-3"
        name={name}
        id={id}
        value={type !== 'file' ? inpValue[name] || '' : undefined} // Avoid 'value' attribute for file inputs
        onChange={inputHandler}
        type={type}
        placeholder={placeholder}
      />
      {err && <div className="text-red-500 text-lg">{err}</div>}
    </div>
  );
}
