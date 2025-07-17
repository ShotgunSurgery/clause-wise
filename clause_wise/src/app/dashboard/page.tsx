"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#18181b] text-white font-sans relative overflow-x-hidden flex flex-col items-center">
      {/* Dotted grid background */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px'}} />
      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="bg-[#23232a] rounded-xl w-10 h-10 flex items-center justify-center font-bold text-lg">CS</div>
          <span className="text-2xl font-extrabold tracking-tight">ClauseWise</span>
        </div>
        <div className="flex gap-8 items-center text-lg font-medium">
          <Link href="/" className="text-white border-b-2 border-white pb-1">Home</Link>
          <Link href="/dashboard" className="text-gray-400 hover:text-white transition">Dashboard</Link>
          <a href="#" className="text-gray-400 hover:text-white transition">Editor</a>
          <Link href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link>
        </div>
        <div className="flex gap-3 items-center">
          <button
            className="text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#23232a] transition"
            onClick={() => router.push("/signup")}
          >
            Sign in
          </button>
          <Button className="bg-white text-black font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-200">Get Started</Button>
        </div>
      </nav>
      <main className="relative z-10 flex flex-col items-center justify-center w-full pt-24 pb-16 px-4">
        {/* Hero Section */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#23232a] rounded-xl w-12 h-12 flex items-center justify-center font-bold text-xl">CS</div>
          <span className="text-3xl font-extrabold tracking-tight">ClauseWise Dashboard</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight mb-4">
          Document Scanner
        </h1>
        <p className="text-lg text-gray-300 text-center mb-10 max-w-2xl">
          Upload your legal documents and we'll Instantly point out the clauses that can get in
        </p>
        {/* Upload UI Section */}
        <section className="w-full max-w-3xl flex flex-col items-center">
          <Card className="w-full bg-gradient-to-br from-[#a259ff]/90 to-[#005bea]/90 border-none shadow-lg rounded-2xl flex flex-col items-center py-12 px-4 mb-8 relative">
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col items-center mb-6">
                <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white mb-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" /></svg>
                <Button className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 mb-2">Choose Files</Button>
                <span className="text-white/80 text-sm">or drop files here</span>
              </div>
            </div>
          </Card>
          <div className="w-full flex flex-col items-center mb-4">
            <ul className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-2xl">
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">✔</span> Upload effortlessly online</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">✔</span> Secure, private, and fast </li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">✔</span> Works on all devices and platforms</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
