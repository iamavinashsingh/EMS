import React from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import TaskDetails from '../Tasks/TaskDetails'

function EmployeeDashboard(props) {
  
  return (
    <div className=' h-screen'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskList data={props.data} />
        <TaskDetails data={props.data} />
    </div>
  )
}

export default EmployeeDashboard