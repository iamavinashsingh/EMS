import React from 'react'
import Logo from '../../assets/taskifyr-logo.png';
import { LuLogOut } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";


function Header(props) {

  const logOutUser =()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='bg-[#171717] w-screen px-5 py-3 flex  justify-between items-center rounded-b-3xl '>
      <div className='logoImage'>
        <img className='w-20 h-12' src={Logo} alt="Taskifyr - logo" />        
      </div>  
      <div className='flex gap-5 justify-center items-center'>
        <h1 className='text-lg  whitespace-nowrap text-[#7A7A7A] font-medium'>Hello, <span className='text-xl font-bold'>Username</span></h1>
        <div className='flex  text-[#7A7A7A] items-center gap-2 w-full px-2 py-1 rounded-full bg-[#272727] border border-[#2D2D2D] hover:bg-[#B7552E] hover:text-white active:scale-90'>
          <div className='text-white'><LuLogOut /></div>
          <button onClick={logOutUser}>Log out</button>
        </div>
      </div>
     
        
    </div>
  )
}

export default Header