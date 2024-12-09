import React, { useContext } from 'react'
import {Context} from "./contexts/Context" 
export default function SidebarCard({ elem, id }) {
    let contextData = useContext(Context) 
    let{setActiveNo}=contextData
  
    return (
        <div className='border p-5 grid grid-cols-3 items-center gap-5 rounded-sm' onClick={()=>{setActiveNo(id)}}>
            <div className='bg-gray-400 w-16 h-16 rounded-sm'></div>
            <div className='col-span-2'>
                <h1 className='text-[15px'>{elem.title}</h1>
                <p className='text-xs'>{elem.description}</p>
            </div>
        </div>
    )
}
