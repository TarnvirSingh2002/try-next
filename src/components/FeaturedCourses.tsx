import Link from 'next/link'
import React from 'react'

export default function FeaturedCourses() {
  return (
    <div>
      <div className='py-12 bg-gray-900'>
        <div>
            <div className="text-center">
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best</p>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            test
        </div>
        <div className='mt-20 text-center'>
            <Link href={'/courses'} 
                className='px-4 py-2 rounded border border-neutral-700 bg-white hover:bg-gray-100 transition duration-200' style={{color:"black"}}>
                View all courses
            </Link>
        </div>
      </div>
    </div>
  )
}
