'use client'
import React from 'react'
import { Spotlight } from './ui/Sportlight'
import Link from 'next/link'
import { Button } from './ui/moving-border'


export default function HeroSection() {
  return (
    <>      
      <Spotlight className='-top-40 left-0 md:left-60 md:-top-20' fill="white" />
      <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <div className='p-4 relative z-10 w-full text-center'>
          <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neurtal-50 to-neutral-400'>Master the art of music</h1>
          <p className='mt-4 font-normal text-base md:text-lg text neutral-300 max-w-lg mx-auto'>Did you want to transfer your carrer to some thing special and want to enjoy your life.
            then leave your house and start a new journey by your own and create a better world. where there is no one to disturb you
          </p>
          <div className='mt-4'>
            <Link href={'/courses'}>
              <Button borderRadius='1.75rem'>Explore Courses</Button>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}
