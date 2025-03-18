import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskDetails({data}) {
   
  return (
    <div className='h-[55%]  p-5 mt-10'>
        <div id='taskListDetails' className='overflow-x-auto h-full w-full rounded-3xl flex items-center justify-start gap-5 flex-nowrap'>
            {data.tasks.map((elem,idx)=>{
               if(elem.active){
                  return <AcceptTask key={idx} data={elem} />
               }
               if(elem.newTask){
                  return <NewTask key={idx} data={elem} />
               }
               if(elem.completed){
                  return <CompleteTask key={idx} data={elem} />
               }
               if(elem.failed){
                  return <FailedTask key={idx} data={elem} />
               }
            })}   
            
        </div>
    </div>
  )
}

export default TaskDetails