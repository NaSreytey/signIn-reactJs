import React from 'react'
import { useState,FormEvent } from 'react'

interface User{
    password:number,
    confirmPassword:number,
    email:string,
}

const Form:React.FC<User> = () => {
    const [password,setPassword]=useState<number>()
    const [confirmPassword,setConfirmPassword]=useState<number>()
    const [email,setEmail]=useState('')

const handleSubmit=(e: React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(password===confirmPassword){
        alert('passwords match')
        }else{
            alert('passwords do not match')
        }
}
const validateEmail=(e: React.SyntheticEvent<HTMLFormElement>)=>{
    const signs=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
}

  return (
    <form onSubmit={handleSubmit} className='bg-pink-300 p-2'>
        <div className='flex justify-between w-full'>
            <p className='w-[160px]'>email:</p> <input type="email"  placeholder='username12@email.com' className='w-[200px] h-[30px] border border-gray-400 ' onChange={e=>setEmail(e.target.value)}  /> <br />
        </div>
        <div className='flex justify-between'>
            <p className='w-[160px]'>password</p> <input type="password" placeholder='password'  maxLength={12} className='w-[200px] h-[30px] border border-gray-400 ' onChange={e=>setPassword(e.target.value)} /> <br />
        </div>
        <div className='flex justify-between '>
            <p className='w-[160px]'>comfirm password:</p> <input type="password" placeholder='confirm password' maxLength={12} value={confirmPassword} className='w-[200px] h-[30px] border border-gray-400 ' onChange={e=>setConfirmPassword(e.target.value)} /> <br />
        </div>
        <button className='bg-green-600 px-2 text-white'>submit</button>
    </form>
  )
}

export default Form