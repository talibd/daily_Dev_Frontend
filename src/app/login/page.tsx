'use client';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"
import Login from "@/components/auth/Login";
import SignUp from "@/components/auth/SignUp";
import Link from "next/link";

export default function login() {



  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 flex-col">
        <Link href="/">
        <Image src={'/daily-dev-logo.svg'} alt="logo" priority={true} width={200} height={200} />
        </Link>
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">login</TabsTrigger>
        <TabsTrigger value="sign up">sign up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Login/>
      </TabsContent>
      <TabsContent value="sign up">
       <SignUp/>
      </TabsContent>
    </Tabs>
    </div>
  )
}
