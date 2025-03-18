import React from 'react'

function TaskList({data}) {
  return (
    <div className='px-5 flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-3xl w-[45%] p-10 bg-[#E4A085]'>
          <h1 className='text-3xl font-bold'>{data.taskCounts.newTask}</h1>
          <h2 className='text-xl font-semibold'>New Task</h2>
        </div>
        <div className='rounded-3xl w-[45%] p-10 bg-[#C96D48]'>
          <h1 className='text-3xl font-bold'>{data.taskCounts.active}</h1>
          <h2 className='text-xl font-semibold'>Accepted Task</h2>
        </div>
        <div className='rounded-3xl w-[45%] p-10 bg-[#B7552E]'>
          <h1 className='text-3xl font-bold'>{data.taskCounts.completed}</h1>
          <h2 className='text-xl font-semibold'>Completed Task</h2>
        </div>
        <div className='rounded-3xl w-[45%] p-10 bg-[#6E301D]'>
          <h1 className='text-3xl font-bold'>{data.taskCounts.failed}</h1>
          <h2 className='text-xl font-semibold'>Failed Task</h2>
        </div>
        
    </div>
  )
}

export default TaskList