import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@iconify/react"




const techStack = [
  { name: "Python", icon:"logos:python"},
  { name: "FastAPI", icon: "logos:fastapi-icon"},
   { name: "PyTorch", icon: "logos:pytorch-icon" },
  { name: "Docker", icon: "logos:docker-icon"},
   { name: "RocksDB", icon: "logos:rocksdb"},
  { name: "PostgreSQL", icon: "logos:postgresql"}
]

export default function TechStack() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1A1A2E]" />
      <div className="absolute inset-0 grid-background" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techStack.map(({ name, icon }, index) => (
            <Card key={index} className="glass-effect text-white hover:bg-white/20 transition-colors">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Icon className="h-12 w-12 mb-4 rounded-full" icon={icon} />  
                <span className="font-medium text-white">{name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

