'use client'
import { useToast } from '@/components/ui/use-toast'
import axios, { AxiosError } from 'axios'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const RegisterPage = () => {
const [email , setEmail] = useState('')
const [password,setPassword] = useState('')
const [creatingUser,setcreatingUser] = useState(false)
const [userCreated, setUserCreated] = useState(false)
const [error,seterror] = useState(false)

const {toast} = useToast()

const handleformSubmit= async(e)=>{
 try {
   console.log('button clicked')
   e.preventDefault()
   seterror(false)
   setcreatingUser(true)
   console.log('form is submitted')
   const response = await axios.post('/api/register',{email:email,password:password})
   if (response.data.success === true) {
    toast({
      title: "success",
      description: response.data.message,
    });
  }
   console.log(response)
   setcreatingUser(false)
   setUserCreated(true)
 } catch (error) {
  seterror(true)
  console.log("error in signup of user ", error);
  toast({
    title: "success",
    description: error.response.data.message,
  });
  setcreatingUser(false)
  seterror(true)

 }
}

  return (
    <section className='my-8'>
     <h1 className='text-center text-primary  text-4xl font-bold tracking-wider'>Register</h1>
     {
      userCreated && (
        <div className='my-4 text-center text-sm font-semibold   text-green-600'>
          User Created. Now you can <Link className=' font-bold text-green-800' href={'/login'}>login</Link>
        </div>
      )
     }
     {
      error && (
        <div className='my-4 text-center text-sm font-semibold   text-red-500'>
         An error has occured. <br />Please try again
        </div>
      )
     }

     <form onSubmit={handleformSubmit} className='block max-w-sm mx-auto  mt-7'>

        <input disabled={creatingUser} className='disabled:bg-gray-100 disabled:cursor-not-allowed' type="email" placeholder=' email' value={email} onChange={e=>setEmail(e.target.value)} />
        <input disabled={creatingUser} className='disabled:bg-gray-100 disabled:cursor-not-allowed' type="password" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)} />
        <button disabled={creatingUser}  type='submit' className='disabled:bg-red-400 disabled:cursor-not-allowed'>
          {
            creatingUser?(<span className='flex items-center justify-center gap-2'> <Loader2 className='animate-spin'/> Please Wait </span> ) : ("Register")
         
          }
          </button>
        
        <div className='flex items-center gap-2 justify-center my-4 '>
          <div className='px-12 py-[0.5px]  bg-gray-300'></div> <span>or</span> <div className='px-12 py-[0.5px]  bg-gray-300'></div>
        </div>
        <button  className='flex justify-center items-center gap-3 font-bold'>
         <Image src='/google.png' width={33} height={33} alt='google' /> 
          Login With Google</button>

     </form>
     <div className='mt-5'>
          <h2 className='text-sm text-center f'>Have an account? <Link href={'/login'} className='text-primary font-semibold'>login</Link></h2>
        </div>

    </section>
  )
}

export default RegisterPage
