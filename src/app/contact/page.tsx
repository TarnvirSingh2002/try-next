"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-black pt-16">
      <Meteors number={60} />

      <main className="relative z-10 flex items-center justify-center px-6 py-24">
        <section
          aria-labelledby="contact-heading"
          className="w-full max-w-3xl rounded-2xl bg-white/6 backdrop-blur-sm border border-[#4c6676]/20 p-8 shadow-2xl"
        >
          <h1
            id="contact-heading"
            className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-[#D3C3B9] mb-4"
          >
            Contact Us
          </h1>
          <p className="text-center text-sm md:text-base text-[#C2D6E5] mb-8">
            Have a question or want to collaborate? Drop your message below — we’ll
            get back to you soon.
          </p>

          <form className="grid grid-cols-1 gap-4">
            {/* Email */}
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="peer h-12 w-full rounded-lg bg-white/6 border border-[#7A9BB0]/30 px-4 pt-4 pb-1 text-sm text-[#D3C3B9] outline-none transition-shadow duration-200 focus:shadow-[0_8px_30px_rgba(21,96,147,0.18)] focus:border-[#156093]"
                placeholder=" "
                aria-label="Your email address"
                autoComplete="email"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-4 top-3 origin-left transform text-sm text-[#9fb6c9] transition-all duration-150 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-[#156093]"
              >
                Your email address
              </label>
              <span className="absolute right-3 top-3 text-sm text-[#9fb6c9]">
                {/* simple email icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 7.5L12 13L21 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </span>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="peer w-full resize-y rounded-lg bg-white/6 border border-[#7A9BB0]/30 px-4 pt-4 pb-3 text-sm text-[#D3C3B9] outline-none transition-shadow duration-200 focus:shadow-[0_10px_40px_rgba(21,96,147,0.12)] focus:border-[#156093]"
                placeholder=" "
                aria-label="Your message"
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-4 top-3 origin-left transform text-sm text-[#9fb6c9] transition-all duration-150 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-[#156093]"
              >
                Your message
              </label>
              <div className="absolute right-3 bottom-3 text-xs text-[#9fb6c9]">min. 20 chars</div>
            </div>

            
              <button
                type="submit"
                className="ml-auto inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#cd6a4e] to-[#b95534] px-5 py-2 text-sm font-semibold text-white shadow-lg transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Send message
              </button>
          </form>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
