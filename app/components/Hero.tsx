import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 synthwave-gradient opacity-30" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="absolute inset-0 grid-background" />
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/llama-vision-mini-FTWnnpdvHdzGrcGDSdEmSbf7LbSz7T.webp"
        alt="Synthwave Llama"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[80vh] object-contain opacity-80"
      />
      <div className="container mx-auto px-4 text-center relative z-10 mt-16">
        <h2 className="text-6xl font-bold mb-4 text-white text-glow">OpenAI In a Box</h2>
        <p className="text-xl mb-8 text-white text-glow max-w-2xl mx-auto">
          Production ready complete OpenAI API Specification implemented on a single H100 GPU or 2xA40 GPU
        </p>
        <Button size="lg" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white">
          Get Started
        </Button>
      </div>
    </section>
  )
}

