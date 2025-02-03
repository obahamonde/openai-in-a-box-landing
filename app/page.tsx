import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import TechStack from "./components/TechStack"
import Models from "./components/Models"
import Installation from "./components/Installation"
import Usage from "./components/Usage"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <TechStack />
        <Models />
        <Installation />
        <Usage />
      </main>
      <Footer />
    </div>
  )
}

