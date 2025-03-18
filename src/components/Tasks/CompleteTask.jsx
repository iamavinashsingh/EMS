import React from 'react'

function CompleteTask({data}) {
  return (
    <div className='flex-shrink-0 px-5 py-5 h-full w-[300px] bg-[#272727] border border-[#2D2D2D] rounded-3xl '>
        <div className='flex items-center justify-between'>
                <h3 className='px-3 py-1 rounded-xl font-bold uppercase text-sm bg-[#B7552E]'>{data.category}</h3>
                <h3 className='text-[#7A7A7A] text-sm font-semibold'>{data.taskDate}</h3>
        </div> 
        <h2 className='text-xl uppercase font-bold mt-10'>{data.taskTitle}</h2>
        <p className='mt-5 text-sm'>{data.taskDescription}</p>
        <div className='flex flex-col justify-center mt-20  gap-2'>
            <button className='bg-[#101010] text-white font-bold rounded-xl px-2 py-1 active:scale-95'>Completed</button>
        </div>
    </div>
  )
}

export default CompleteTask