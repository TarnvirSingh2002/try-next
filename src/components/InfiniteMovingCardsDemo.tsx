"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";

export function InfiniteMovingCardsDemo() {
    return (
        <div
            className="h-[30rem] w-full dark:bg-black relative flex flex-col items-center justify-center overflow-hidden"
        >
            {/* 🔥 GRID BACKGROUND ADDED HERE */}
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />

            <h2 className="text-3xl font-bold text-center mb-8 z-10">
                Hear Our Harmony: Evolving Soundscapes
            </h2>

            <div className="w-full max-width-6xl z-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="normal"
                />
            </div>
        </div>
    );
}
const testimonials = [
    {
        quote:
            "This platform transformed the way I learn music. The structured lessons and real-time guidance helped me pick up guitar faster than I ever imagined.",
        name: "Arjun Mehta",
        title: "Guitar Student",
    },
    {
        quote:
            "I always struggled with vocals, but the coaches here taught me breathing, pitch control, and confidence. I can finally sing the songs I love.",
        name: "Sana Kapoor",
        title: "Vocal Training Student",
    },
    {
        quote:
            "The production course was unreal. From mixing to mastering, everything was explained so clearly. Now I make my own tracks at home.",
        name: "Ryan Thomas",
        title: "Music Production Learner",
    },
    {
        quote:
            "Learning piano has never been this fun. The interactive exercises and personalized feedback kept me motivated every day.",
        name: "Emily Rodriguez",
        title: "Piano Enthusiast",
    },
    {
        quote:
            "As a complete beginner, I was nervous to start. But the instructors were patient, skilled, and incredibly encouraging. Best decision ever!",
        name: "Harsh Verma",
        title: "Beginner Music Student",
    },
];
