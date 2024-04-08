import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import myAxios from '@/lib/axios.config'
import { REGISTER_URL } from '@/lib/apiEndPoints'
import toast from 'react-hot-toast'
import { RiEyeLine } from 'react-icons/ri'
import { AiOutlineEyeInvisible } from 'react-icons/ai'


function SignUp() {

    const [ authState, setAuthState ] = useState({
        name:"",
        username:"",
        email:"",
        password:"",
        password_confirmation:""
    });
    const [errors , setErrors] = useState({
      name:[],
      username: [],
      email: [],
      password: [],
    });

    const [isLoading,setIsLoading] = useState(false);
    const [eyeToggle,setEyeToggle] = useState(false);

    const handleToggle = ()=>{
      setEyeToggle(!eyeToggle);
    }


    const handleSubmit = (event:React.FormEvent) => {
      event.preventDefault();
      setIsLoading(true);
      myAxios.post(REGISTER_URL, authState)
      .then((res) => {
        setIsLoading(false);
        const response = res.data
        toast.success("Account created successfully!")
      })
      .catch((err) => {
        setIsLoading(false);
        if(err.response?.status === 422) {
          setErrors(err.response?.data.errors);
        } else {
          toast.error("somthing went wrong.")
        }
      })
    }

  return (
    <Card>
    <CardHeader>
      <CardTitle  className="text-center w-full">Sign Up</CardTitle>
      <CardDescription className="text-center">
        create an account
      </CardDescription>
    </CardHeader>
    <form onSubmit={handleSubmit}>
    <CardContent className="space-y-2">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={authState.name} onChange={(e) => setAuthState({...authState, name:e.target.value})} type="text" placeholder='john smith' />
        <span className='text-red-500 text-md'>{errors.name}</span>
      </div>
      <div className="space-y-1">
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" value={authState.username} onChange={(e) => setAuthState({...authState, username: e.target.value})} placeholder='john123' />
        <span className='text-red-500 text-md'>{errors.username}</span>

      </div>
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={authState.email} onChange={(e) => setAuthState({...authState, email:e.target.value})} placeholder='xyz@gmail.com' />
        <span className='text-red-500 text-md'>{errors.email}</span>

      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <div className=' relative flex items-center'>
          <button type='button' className=' absolute right-0 mr-3' onClick={handleToggle}>
            { eyeToggle ? <AiOutlineEyeInvisible size={20} /> : <RiEyeLine size={20} /> }
          
          </button>
        <Input id="password" value={authState.password} onChange={(e) => setAuthState({...authState, password:e.target.value})} type={ eyeToggle ? "text" : "password" }  />
        </div>
        <span className='text-red-500 text-md'>{errors.password}</span>

      </div>
      <div className="space-y-1">
        <Label htmlFor="password_c">Confirm Password</Label>
        <Input id="password_c" value={authState.password_confirmation} onChange={(e) => setAuthState({...authState, password_confirmation:e.target.value})} type={ eyeToggle ? "text" : "password" }  />
      </div>
    </CardContent>
    <CardFooter>
    <Button className="w-full"  disabled={isLoading} >
          { isLoading ?
          <div className="flex gap-2 text-lg items-center justify-center">
              <LoaderCircle size={25} color="black" className=" animate-spin" />
              Loading...
          </div> 
          :
          <div className="flex gap-2 text-lg items-center justify-center">
          Sign Up
      </div> 
           }
      </Button>
    </CardFooter>
    </form>
  </Card>
  )
}

export default SignUp