import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const diagrams = [
  {
    title: "E-commerce Architecture",
    description: "Full-stack e-commerce platform with React frontend and Node.js backend",
    tech: ["React + Node.js"],
    tags: ["Auth", "DB", "CDN", "API"],
    date: "15/1/2024",
  },
  {
    title: "Microservices Setup",
    description: "Distributed system with multiple microservices and message queues",
    tech: ["Python + Go"],
    tags: ["API Gateway", "Cache", "Queue", "Monitoring"],
    date: "10/1/2024",
  },
  {
    title: "Blog Platform",
    description: "Simple blog with authentication and file storage",
    tech: ["React + Python"],
    tags: ["Auth", "Storage", "CDN"],
    date: "8/1/2024",
  },
  {
    title: "Real-time Chat App",
    description: "WebSocket-based chat application with real-time messaging",
    tech: [],
    tags: [],
    date: "-",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform with real-time analytics",
    tech: [],
    tags: [],
    date: "-",
  },
  {
    title: "File Sharing Service",
    description: "Secure file upload and sharing platform",
    tech: [],
    tags: [],
    date: "-",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white font-sans relative overflow-x-hidden">
      {/* Dotted grid background */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px'}} />
      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="bg-[#23232a] rounded-xl w-10 h-10 flex items-center justify-center font-bold text-lg">CW</div>
          <span className="text-2xl font-extrabold tracking-tight">ClauseWise</span>
        </div>
        <div className="flex gap-8 items-center text-lg font-medium">
          <a href="#" className="text-white border-b-2 border-white pb-1">Home</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Dashboard</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Editor</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Pricing</a>
        </div>
        <div className="flex gap-3 items-center">
          <button className="text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#23232a] transition">Sign in</button>
          <Button className="bg-white text-black font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-200">Get Started</Button>
        </div>
      </nav>
      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-24 pb-16 px-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#23232a] rounded-xl w-12 h-12 flex items-center justify-center font-bold text-xl">CW</div>
          <span className="text-3xl font-extrabold tracking-tight">ClauseWise</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center leading-tight mb-4">
        ⚖️ Get Legal Advice.<br />
          <span className="bg-gradient-to-r from-[#a259ff] via-[#6a82fb] to-[#005bea] bg-clip-text text-transparent">Instantly.</span>
        </h1>
        <p className="text-xl text-gray-300 text-center mb-10 max-w-2xl">
        Clear. Confidential. Reliable.</p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button className="bg-white text-black font-semibold px-7 py-3 text-lg rounded-lg shadow hover:bg-gray-200 flex items-center gap-2">
            Generate Architecture <span className="text-xl">→</span>
          </Button>
          <Button variant="outline" className="border border-[#23232a] text-white px-7 py-3 text-lg rounded-lg hover:bg-[#23232a]">
            See Demo
          </Button>
        </div>
      </main>
    </div>
  );
}