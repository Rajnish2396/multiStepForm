import React from 'react'
import { sidebar } from './data/Sidebar';
import SidebarCard from './SidebarCard';
export default function AsideBar() {

  return (
    
    <div className='min-h-screen bg-white  md:pt-9 px-5 lg:flex flex-col gap-6 hidden'>
      {sidebar.map((elem, i) => {
        return (
          <SidebarCard elem={elem} key={elem.id || elem.title} id ={elem.id} />

        )
      })}
    </div>
  )
}
