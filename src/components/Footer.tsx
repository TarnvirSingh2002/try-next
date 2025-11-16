// 'use client'
// import React from 'react'
// export default function Footer() {
//   return (
//     <footer className='bg-black text-grey-400 py-12'>
//         <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-4 gap-8 px-4
//         lg:px-8'>
//             <div>1</div>
//             <div>2</div>
//             <div>3</div>
//             <div>4</div>
//         </div>
//     </footer>
//   )
// }




"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-3">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-8">
        
        {/* LOGO / ABOUT */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">MusicWave</h2>
          <p className="text-gray-400">
            Your daily source for new tracks, trending playlists, and exclusive artist stories.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 text-xl text-gray-300">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaSpotify className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Artists</li>
            <li className="hover:text-white cursor-pointer">Albums</li>
            <li className="hover:text-white cursor-pointer">Playlists</li>
          </ul>
        </div>

        {/* GENRES */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Genres</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Hip-Hop</li>
            <li className="hover:text-white cursor-pointer">Pop</li>
            <li className="hover:text-white cursor-pointer">Rock</li>
            <li className="hover:text-white cursor-pointer">EDM</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">Subscribe for new releases & updates.</p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mb-3 rounded bg-gray-800 text-gray-200 focus:outline-none"
          />
          <button className="w-full bg-white text-black py-2 rounded font-semibold hover:bg-gray-200">
            Subscribe
          </button>
        </div>

      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-500 mt-2 border-t border-gray-800 pt-2">
        © 2025 MusicWave. All rights reserved.
      </div>
    </footer>
  );
}
