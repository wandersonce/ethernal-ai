"use client"

import { useAuth } from '@clerk/nextjs'
import TypeWriterComponent from "typewriter-effect";

export default function LadingHero() {
  const {isSignedIn} = useAuth();
  return (
    <div className='text-white font-bold py-36 text-center space-y-5'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
        <h1>The Best AI Tool for</h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-600'>
          <TypeWriterComponent 
            options={{
              strings: [
                "Chatbox",
                "Photo Generation",
                "Music Generation",
                "Code Generation",
                "Video Generation",
              ],
              autoStart:true,
              loop:true
            }}
          />
        </div>
      </div>
    </div>
  )
}
