import React, { useState } from 'react'
import NewTask from '../Tasks/NewTask'
import { getLocalStorage, setLocalStorage } from '../../utils/LocalStorage'

function CreateTask() {
    
    
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [category, setCategory] = useState('')
    const [assignTo, setAssignTo] = useState('')

    const [newTask, setNewTask] = useState({})


    const submitHandler = (e)=>{
        e.preventDefault()
        
        setNewTask({taskTitle,taskDate,taskDescription,category,assignTo,active:false,newTask:true,failed:false,completed:false})
        const data = JSON.parse(localStorage.getItem('employees'))
        data.forEach((elem)=>{
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask)
                elem.taskCounts.newTask+=1
            }
        })
        localStorage.setItem('employees',JSON.stringify(data))
        
        
       

        setAssignTo('')
        setCategory('')
        setTaskDate('')
        setTaskDescription('')
        setTaskTitle('')
    }

  return (
    <div className='p-5  mt-3 rounded-3xl'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between bg-[#272727] p-10 rounded-3xl'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='mb-0.5'>Task Title</h3>
                        <input value={taskTitle} onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }}
                        className='border-2 mb-2 w-4/5  text-sm outline-none bg-transparent border-[#313131] rounded px-5 py-3 placeholder:text-[#7A7A7A]' type="text" placeholder='Make a task' />
                    </div>
                    
                    <div>
                        <h3 className='mb-0.5'>Date</h3>
                        <input value={taskDate} onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }}
                        className='border-2 mb-2 w-4/5 text-sm outline-none bg-transparent border-[#313131] rounded px-5 py-3 placeholder:text-[#7A7A7A]' type="date"  />
                    </div>
                    <div>
                        <h3 className='mb-0.5'>Assign To</h3>
                        <input value={assignTo} onChange={(e)=>{
                            setAssignTo(e.target.value)
                        }}
                         className='border-2 mb-2 w-4/5 text-sm outline-none bg-transparent border-[#313131] rounded px-5 py-3 placeholder:text-[#7A7A7A]' type="text" placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3 className='mb-0.5'>Category</h3>
                        <input value={category} onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                        className='border-2 mb-2 w-4/5 text-sm outline-none bg-transparent border-[#313131] rounded px-5 py-3 placeholder:text-[#7A7A7A]' type="text" placeholder='Design , Dev ,YT , etc.'/>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col'>
                    <h3 className='mb-0.5'>Description</h3>
                    <textarea value={taskDescription} onChange={(e)=>{
                            setTaskDescription(e.target.value)
                        }}className='border-2 h-56 w-4/5 text-sm outline-none bg-transparent border-[#313131] rounded px-5 py-3 placeholder:text-[#7A7A7A]'></textarea>
                    <button className='w-4/5 mt-6  bg-[#B7552E] rounded py-2 active:scale-95'>Create Task</button>
                </div>

                
            </form>
        </div>
  )
}

export default CreateTask

