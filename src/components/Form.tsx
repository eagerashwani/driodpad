import React from 'react'
import { Button } from './ui/button'
import { Apple } from 'lucide-react'
import AppleLogo from '../assets/appleIcon.svg'

const Form = () => {
  return (
    <div className='pt-4 pl-32 flex flex-col'>
        <h1 className='font-semibold text-4xl'>Create an account</h1>
        <p>Start with our 30 day free trial.</p>
        <Button className='w-1/3 h-14 rounded-none bg-cgreen my-4'>SIGN UP</Button>
        <Button className='w-1/3 h-14 rounded-none my-4' variant={'outline'}>SIGN UP WITH GOOGLE</Button>
        <Button className='w-1/3 h-14 rounded-none my-4'> 
         <img src={AppleLogo} className="pr-3" alt="Vite logo" />
        SIGN UP WITH APPLE</Button>
    </div>
  )
}

export default Form