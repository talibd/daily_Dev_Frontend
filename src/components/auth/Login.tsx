import React, { useState } from 'react'
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
import { CHECK_CREDENTIALS, LOGIN_URL } from '@/lib/apiEndPoints'
import toast from 'react-hot-toast'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { RiEyeLine } from 'react-icons/ri'
import { signIn } from 'next-auth/react'

function Login() {

    const [ authState, setAuthState ] = useState({
        email:"",
        password:"",
    });
    const [errors , setErrors] = useState({
      email: [],
      password: [],
    });

    const [isLoading,setIsLoading] = useState(false);
    const [eyeToggle,setEyeToggle] = useState(false);

    const handleToggle = ()=>{
      setEyeToggle(!eyeToggle);
    }

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      setIsLoading(true);
      myAxios
        .post(CHECK_CREDENTIALS, authState)
        .then((res) => {
          const response = res.data;
          console.log(response);
          
          setIsLoading(false);
          if (response?.status == 200) {
            signIn("credentials", {
              email: authState.email,
              password: authState.password,
              redirect: true,
              callbackUrl: "/",
            });
          } else if (response?.status == 401) {
            toast.error(response?.message);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          if (err.response?.status == 422) {
            setErrors(err.response?.data?.errors);
          } else {
            toast.error("Something went wrong.please try again!");
          }
        });
    };

  return (
    <Card>
          <CardHeader>
            <CardTitle className="text-center">login</CardTitle>
            <CardDescription className="text-center">
              login to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>

          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input 
              id="email" 
              type="email" 
              placeholder="xyz@gmail.com"
              value={authState.email}
              onChange={(e) => setAuthState({...authState, email:e.target.value})}
               />
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
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled={isLoading}  >
                { isLoading ?
                <div className="flex gap-2 text-lg items-center justify-center">
                    <LoaderCircle size={25} color="black" className=" animate-spin" />
                    Loading...
                </div> 
                :
                <div className="flex gap-2 text-lg items-center justify-center">
                Login
            </div> 
                 }
            </Button>
          </CardFooter>
          </form>

        </Card>
  )
}

export default Login