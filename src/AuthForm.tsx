// import React from 'react'
// import { ChangeEvent, useState } from 'react'

// interface AuthFormProps{
   
// }

// const AuthForm:React.FC<AuthFormProps> = ({}) => {
//     const [signUpForm,setSignUpForm]=useState({
//         email:"",
//         password:"",
//         cpassword:""
//        });
//        const [error,setError]=useState<Record<string,string>>({})
//        const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
//         const {name,value}=e.target;
//         setSignUpForm((cv)=>{
//             return {...cv,[name]:value}
//         });
//          setError((cv)=>{
//             return {...cv,[name]:""}
//          })
//        }
//        const handleSubmit=(e:ChangeEvent<HTMLFormElement>)=>{
//         e.preventDefault();
    
//         //const errors=validateForm(signUpForm) // component error i will do it from ai hasha
//        }


//   return (
//     <form onSubmit={handleSubmit} className='bg-gray-400 p-4 w-[300px] grid gap-2' noValidate>
//         <input type="email" name="email" placeholder='email' id="" className='border p-1 rounded-md' value={signUpForm.email} onChange={handleChange} />
//         <input type="password" name="password" placeholder='password'  id="" className='border p-1 rounded-md' />
//         <input type="password" name="cpassword" placeholder='confirm password' id="" className='border p-1 rounded-md' />
//         <button className='bg-green-600' >submit</button>
//     </form>
//   )
// }

// export default AuthForm