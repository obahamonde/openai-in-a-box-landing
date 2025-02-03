"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@iconify/react"
import { MessageSquare } from "lucide-react"
import { useEffect, useState } from "react"

function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const models = [
  {
    name: "Chat",
    model: "DeepSeek-R1",
    icon: "mdi:chat",
    color: getRandomColor()
  },
  {
    name: "Image",
    model: "flux-schnell",
    icon: "mdi:image",
    color: getRandomColor()
  },
  {
    name: "TextToSpeech",
    model: "xtts",
    icon: "mdi:headphones",
    color: getRandomColor()
  },
  {
    name: "SpeechToText",
    model: "Whisper-Large-v3",
    icon: "mdi:microphone",
    color: getRandomColor()
  },
  {
    name: "VectorStores",
    model: "RocksDB + PostgreSQL",
    icon: "mdi:database",
    color: getRandomColor(),
  },
  {
    name: "Search",
    model: "RockDB + Faiss-cpu",
    icon: "mdi:magnify",
    color: getRandomColor()
  },
  {
    name: "FineTuning",
    model: "S3 + PostgreSQL + Huggingface + vLLM",
    icon: "mdi:cog",
    image: "/placeholder.svg?height=200&width=200",
    color: getRandomColor(),
  },
]

export default function Models() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % models.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1A1A2E]" />
      <div className="absolute inset-0 grid-background" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Models Implemented</h2>
        <div className="flex overflow-hidden relative h-[400px]">
          {models.map((model, index) => {
            const i = model.icon
            return (
              <Card
                key={index}
                className={`absolute w-full transform transition-all duration-500 glass-effect text-white
                  ${
                    index === activeIndex
                      ? "translate-x-0 opacity-100"
                      : index < activeIndex
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0"
                  }`}
              >
                <CardContent className="flex flex-col items-center justify-center p-8 h-[400px]">
                  <Icon icon={i} className="h-16 w-16 mb-6 "  />
                  <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                  <p className="text-lg text-white/70 mb-6">{model.model}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="flex justify-center mt-8 gap-2">
          {models.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors
                ${index === activeIndex ? "bg-[#00F5FF]" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

