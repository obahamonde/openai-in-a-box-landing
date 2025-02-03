import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#FF1493] text-transparent bg-clip-text">
          OpenAI In a Box
        </h1>
        <Button variant="ghost" className="text-white hover:text-[#00F5FF] transition-colors">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </header>
  )
}

