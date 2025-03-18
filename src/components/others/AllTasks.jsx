import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTasks() {

  const authData =  useContext(AuthContext)
 
  return (
    <div className='m-3 px-3 py-2 bg-[#171717] rounded-3xl h-44 overflow-hidden '>
        <div className='bg-[#272727] mb-2 px-5 py-2 rounded-3xl flex justify-between'>
            <h3 className='w-1/5 text-lg'>Employee Name</h3>
            <h3 className='w-1/5 text-lg'>New Task</h3>
            <h3 className='w-1/5 text-lg'>Active</h3>
            <h3 className='w-1/5 text-lg'>Completed</h3>
            <h3 className='w-1/5 text-lg'>Failed</h3>
        </div>
        <div id='adminScrollBar' className='h-[80%] overflow-auto  '>
        {authData.employees.map((elem,idx)=>{
            return <div key={idx} className='bg-[#B7552E] mb-2 px-5 py-2 rounded-3xl flex justify-between'>
            <h3 className='w-1/5 text-lg font-bold'>{elem.firstName}</h3>
            <h3 className='w-1/5 text-lg font-bold'>{elem.taskCounts.newTask}</h3>
            <h3 className='w-1/5 text-lg font-bold'>{elem.taskCounts.active}</h3>
            <h3 className='w-1/5 text-lg font-bold'>{elem.taskCounts.completed}</h3>
            <h3 className='w-1/5 text-lg font-bold'>{elem.taskCounts.failed}</h3>
        </div>
        })}
        </div>
    </div>
  )
}

export default AllTasks