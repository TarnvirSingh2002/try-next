'use client'
import Link from 'next/link'
import React from 'react'
import coursedata from "../data/music_course.json"
import { BackgroundGradient } from './ui/background-gradient';
export default function FeaturedCourses() {
  interface Course {
      id: number;
      title: string;
      slug: string;
      description: string;
      price: number;
      instructor: string;
      isFeatured: boolean;
      image?: string; 
    }

  return (
    <div>
      <div className='py-12 bg-gray-900'>
        <div>
          <div className="text-center">
            <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
            <p className='mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {coursedata.courses.map((course : Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient 
                className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                  <div className='py-6 sm-p-6 flex flex-col items-center flex-grow'>
                    <p className='text-lg sm:text-xl text-white mb-2 dark:text-natural-200'>{course.title}</p>
                    <p className='text-sm px-4 text-neutral-600 dark:text-neutral-400 flex-glow text-center mb-2'>{course.description}</p>
                    <Link className='px-4 py-1 text-black rounded border border-neutral-700 bg-white hover:bg-gray-100 transition duration-200' href={`/courses/${course.slug}`}>
                    Learn More</Link>
                  </div>
                </BackgroundGradient>
              </div>
            )
          )}
        </div>
        <div className='mt-20 text-center'>
          <Link href={'/courses'}
            className='px-4 py-2 rounded border border-neutral-700 bg-white hover:bg-gray-100 transition duration-200' style={{ color: "black" }}>
            View all courses
          </Link>
        </div>
      </div>
    </div>
  )
}
