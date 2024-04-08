'use client';
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div className='w-full h-screen flex flex-col gap-3 items-center justify-center'>
        <h1 className='text-8xl font-bold '>404</h1>
        <h1 className='text-2xl text-center'>Page Not Found</h1>
        <Link href={'/'}>
        <Button>Back to home</Button>
        </Link>
    </div>
  )
}
