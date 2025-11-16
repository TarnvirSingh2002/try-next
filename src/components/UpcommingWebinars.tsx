"use client";
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'

const projects = [
  {
    title: "Mastering Guitar Basics",
    description:
      "Learn essential chords, strumming patterns, and rhythm techniques to kickstart your guitar journey.",
    link: "/webinars/guitar-basics",
  },
  {
    title: "Vocal Training Essentials",
    description:
      "Improve your vocal range, breathing techniques, and pitch control with guided vocal exercises.",
    link: "/webinars/vocal-training",
  },
  {
    title: "Music Production for Beginners",
    description:
      "Discover the fundamentals of digital audio workstations, mixing, and creating your first track.",
    link: "/webinars/music-production",
  },
  {
    title: "Piano & Keyboard Foundations",
    description:
      "Understand scales, chords, melodies, and techniques to build a strong foundation in piano playing.",
    link: "/webinars/piano-foundations",
  },
  {
    title: "Songwriting & Composition",
    description:
      "Learn how to craft emotional lyrics, build strong melodies, and create structured compositions.",
    link: "/webinars/songwriting",
  },
    {
    title: "Live Performance & Stage Skills",
    description:
      "Develop stage presence, microphone technique, confidence, and performance flow for live shows.",
    link: "/webinars/live-performance",
  },
];

export default function UpcommingWebinars() {
  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                <p className='mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
            </div>
            <div className='mt-10'>
                <HoverEffect items={projects} />
            </div>
            <div className='mt-10 text-center'>
                <Link href={'/'}
                    className='px-4 py-2 rounded border border-neutral-700 bg-white hover:bg-gray-100 transition duration-200' style={{ color: "black" }}>
                    View all webinars
                </Link>
            </div>
        </div>
    </div>
  )
}
