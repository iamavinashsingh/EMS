import React, { useState } from 'react'
import Logo from '../../assets/taskifyr-logo.png';

const Login = ({handleLogIn})=> {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler =(e)=>{
        e.preventDefault()
        handleLogIn(email,password)

        console.log('email is ',email)
        console.log('password is ',password)
        setEmail('')
        setPassword('')
        
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='flex px-16 py-16 rounded-3xl bg-[#272727]'>
            <form 
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
            className='flex flex-col items-center justify-center'>
                <img className='w-28 h-20 mb-10' src={Logo} alt="Taskifyr Logo" />
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required
                 className='border  text-xl outline-none bg-transparent border-[#313131] rounded-full px-5 py-3 placeholder:text-[#7A7A7A]' type="email" placeholder='Enter your e-mail' />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='border mt-3  text-xl outline-none bg-transparent border-[#313131] rounded-full px-5 py-3 placeholder:text-[#7A7A7A]' type="password" placeholder='Enter Password' />
                <button className='w-full mt-5 text-xl bg-[#B7552E] rounded-full px-5 py-3 active:scale-95'>Log in</button>
            </form>
        
        </div>

    </div>
  )
}

export default Login