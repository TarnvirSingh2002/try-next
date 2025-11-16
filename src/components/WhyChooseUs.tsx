"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Real-Time Music Collaboration",
    description:
      "Jam together from anywhere in the world. Create, edit, and refine tracks in real time with band members, mentors, or fellow students. Perfect for remote rehearsals, songwriting sessions, and quick creative brainstorming.",
    // content: (
    //   <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
    //     Real-Time Collaboration
    //   </div>

      content: (
      <img
        src="https://wallpapercave.com/wp/wp3558232.jpg"
        className="h-full w-full object-cover"
      />
    ),
    // ),
  },
  {
    title: "Track Layer Management",
    description:
      "Organize your vocals, drums, guitar, and instrument layers effortlessly. Manage versions, compare takes, and keep every idea safe without worrying about losing progress.",
    content: (
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.mcqYXYV5P85a7DCaVqyBRQHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
        className="h-full w-full object-cover"
      />
    )
  },
  {
    title: "Beat & Melody Generator",
    description:
      "Running out of ideas? Spark creativity instantly with AI-powered melody and beat suggestions tailored to your genre and mood. Never hit a creative block again.",
    content: (
      <img
        src="https://tse2.mm.bing.net/th/id/OIP.SN6y8iIeHpXzeuFcXwTOHAHaE6?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
        className="h-full w-full object-cover"
      />
    )
  },
  {
    title: "High-Quality Audio Export",
    description:
      "Export your final mix in multiple formats including WAV, MP3, and FLAC. Our engine ensures studio-grade output so your tracks sound polished everywhere.",
    content: (
      <img
        src="https://tse3.mm.bing.net/th/id/OIP.x31MR6-lqC8ponSDxl5t3AHaDt?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
        className="h-full w-full object-cover"
      />
    )
  },
];

export default function WhyChooseUs() {
  return (
    <div className="w-full">
     <StickyScroll content={content}/>
    </div>
  )
}

