import React from "react";
import { CardContainer, CardItem, CardBody } from '@/components/ui/3d-card'
import Footer from "@/components/Footer";
const courses = [
  {
    name: "Beginner Guitar Course",
    description: "Learn the basics of chords, rhythm, and strumming techniques.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2000&auto=format&fit=crop",
    url: "/courses/guitar-beginner",
  },
  {
    name: "Piano Essentials",
    description:
      "Master scales, melodies, and classical techniques from scratch.",
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=2000&auto=format&fit=crop",
    url: "/courses/piano-essentials",
  },
  {
    name: "Vocal Training Program",
    description:
      "Improve pitch, breathing, and vocal strength with guided techniques.",
    image:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=2000&auto=format&fit=crop",
    url: "/courses/vocal-training",
  },
  {
    name: "Music Production (Beginner)",
    description:
      "Learn DAWs, sound mixing, beat-making, and basic music theory.",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=2000&auto=format&fit=crop",
    url: "/courses/music-production",
  },
  {
    name: "Drums & Rhythm Course",
    description:
      "Build rhythm skills using modern and classical drumming patterns.",
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2000&auto=format&fit=crop",
    url: "/courses/drums-rhythm",
  },
  {
  name: "Advanced Piano Mastery",
  description: "Enhance your piano skills with advanced techniques, music theory, and dynamic expressions.",
  image:
"https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?cs=srgb&dl=acoustic-brand-brass-164743.jpg&fm=jpg" 
}

];

export default function page() {
    return (
        <div className="min-h-screen bg-black pt-35">
            <h1 className="text-lg md:text-6xl text-center font-sans font-bold mb-1 text-white">
                All Courses
            </h1>
            <div className="flex flex-wrap justify-center px-5 gap-3">
                {courses.map((ele,index) => (
                    <CardContainer key={index} className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {ele.name}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {ele.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src={ele.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-10">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="/"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Know More
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Contact us
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
             <Footer/>
        </div>
    )
}
