import { useState } from 'react'
import React from 'react'
import './index.css'
import InputForm from './InputForm'
import Hook from './Hook'
import Yup from './Yup'


function App() {
  
  return (
    <React.Fragment>
      <h2>User input </h2>
      <Yup/>
    </React.Fragment>
  )
}

// type Inputs = {
//   example: string
//   exampleRequired: string
// }


// export default function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<Inputs>()
//   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


//   console.log(watch("example")) // watch input value by passing the name of it


//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form className='flex w-[150px] flex-wrap gap-1 ' onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input className='border' defaultValue="test" {...register("example")} />


//       {/* include validation with required or other standard HTML validation rules */}
//       <input className='border' {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}


//       <input className='border' type="submit" />
//     </form>
//   )
// }
export default App
