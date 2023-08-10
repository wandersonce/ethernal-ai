"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
  {
    name: "Sarah Anderson",
    avatar: "S",
    title:"Content Creator",
    description: "Ethernal AI is a game-changer! It effortlessly transforms my ideas into beautifully written content. Say goodbye to writer's block!"
  },
  {
    name: "David Martinez",
    avatar: "D",
    title:"Entrepreneur",
    description: "As a small business owner, time is precious. This AI Generator helps me draft professional emails and marketing copy in minutes. Truly a productivity booster!"
  },
  {
    name: "Emily Collins",
    avatar: "E",
    title:"Freelance Translator",
    description: "The AI Generator's language translation feature is incredible. It helps me communicate with clients from around the world without the hassle of traditional translation tools."
  },
  {
    name: "Mark Johnson",
    avatar: "M",
    title:"Software Developer",
    description: " I was skeptical at first, but the AI Generator's programming code suggestions are spot-on. It's like having a coding guru by my side, guiding me through complex projects."
  },
  {
    name: "Lisa Parker",
    avatar: "L",
    title:"Social Media Manager",
    description: "Crafting engaging social media posts has never been easier, thanks to the AI Generator. It understands my brand's voice and helps me connect with my audience effortlessly."
  },
  {
    name: "Alex Carter",
    avatar: "A",
    title:"Student",
    description: "Academic writing used to be a struggle, but with the AI Generator, I can produce well-researched papers in no time. It's a lifesaver during the exam season!"
  },
  {
    name: "Rachel Lee",
    avatar: "R",
    title:"Graphic Designer",
    description: "The AI Generator's brainstorming tool is pure genius. It generates a wide range of creative ideas for my design projects, saving me hours of staring at a blank canvas."
  },
  {
    name: " Michael Turner",
    avatar: "M",
    title:"Travel Blogger",
    description: "Planning my upcoming trip was a breeze with the AI Generator. It generated detailed itineraries and even suggested off-the-beaten-path attractions. A travel enthusiast's dream!"
  },
]

export default function LadingContent() {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item)=> (
          <Card key={item.name} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ) )}
      </div>
    </div>
  )
}
